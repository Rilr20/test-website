import LayoutBase from "../../src/template/layoutbase";
import BasicLayout from "../../src/template/basiclayout";
import { throwDice, pointsPreview, bonusPoints, gameOver } from '../../src/components/dicegamelogic'
import React, { useState, useEffect } from 'react'
import { Container, Typography, Card, Button, Box, Checkbox, chipClasses } from "@mui/material";
import { playerCard } from "../../src/components/consts";
import Dice from "../../src/components/dice";
import GameBoard from "../../src/components/gameboard";
Dicegame.PageTitle = 'Dicegame | Website'

export default function Dicegame() {
    const [gameBoard, setGameBoard] = useState(playerCard);
    const [gameStatus, setGameStatus] = useState("unstarted");
    const [dice, setDice] = useState([]);
    const [change, setChange] = useState([0, 1, 2, 3, 4]);
    const [left, setLeft] = useState(3);
    useEffect(() => {
        setGameBoard(playerCard)
    }, []);
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            {gameStatus == "unstarted" ?
                <Box sx={{ display: "flex", justfyContent: "space-between", flexDirection: "column" }}>
                    <Typography variant="h1" sx={{ fontSize: "28pt", textAlign: "center", m: "auto", mt: 2 }}>Start the game</Typography>
                    <Typography sx={{ width: "180px", m: "auto", p: 2 }}>Game rules <br />
                        Throw dice; choose where to put points
                    </Typography>
                    <Button variant="contained" sx={{ height: "50px", width: "200px", m: "auto", mt: 2, pt: 1.5, fontSize: "22pt" }} onClick={() => {
                        setGameStatus("started")
                    }}>Start</Button>
                </Box>
                : <></>}
            {gameStatus == "started" ?
                 <GameBoard 
                    setGameBoard={setGameBoard}
                    change={change}
                    gameBoard={gameBoard}
                    setChange={setChange}
                    dice={dice}
                    setDice={setDice}
                    setLeft ={setLeft}
                    left = {left}
                    setGameStatus={setGameStatus} />: <></>
            }
            {gameStatus == "finished" ?
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                    <Typography variant="h1" sx={{ fontSize: "28pt", textAlign: "center", m: "auto", mt: 2 }}>You got {gameBoard[gameBoard.length - 1].score} points :D</Typography>
                    <Button variant="contained" sx={{ height: "50px", width: "100px", m: "auto", mt: 2 }} onClick={() => {
                        let newPlayerCard = []
                        for (let i = 0; i < playerCard.length; i++) {
                                newPlayerCard.push({
                                    id: i,
                                    text: playerCard[i].text,
                                    score: 0,
                                    isSet: false,
                                    preview: false,
                                })
                        };
                        setGameBoard(newPlayerCard)
                        setGameStatus("unstarted")
                    }}>Play Again</Button>
                </Box>
                : <></>
            }
        </Container >
    )
}

Dicegame.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}
