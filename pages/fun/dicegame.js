import LayoutBase from "../../src/template/layoutbase";
import BasicLayout from "../../src/template/basiclayout";
import { throwDice, pointsPreview, bonusPoints, gameOver } from '../../src/components/dicegamelogic'
import React, { useState, useEffect } from 'react'
import { Container, Typography, Card, Button, Box, Checkbox, chipClasses } from "@mui/material";
// import Gametable from "../../src/components/gametable";
import { playerCard } from "../../src/components/consts";
import Dice from "../../src/components/dice";
Dicegame.PageTitle = 'Dicegame | Website'

export default function Dicegame() {
    const [gameBoard, setGameBoard] = useState(playerCard);
    const [gameStatus, setGameStatus] = useState("unstarted");
    const [dice, setDice] = useState([]);
    const [change, setChange] = useState([0, 1, 2, 3, 4]);
    const [left, setLeft] = useState(3);
    useEffect(() => {
        console.log("woop");
        setGameBoard(playerCard)
    }, []);
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            {gameStatus == "unstarted" ?
                <Box sx={{ display: "flex", justfyContent: "space-between", flexDirection: "column" }}>
                    <Typography variant="h1" sx={{ fontSize: "28pt", textAlign: "center", m: "auto", mt: 2 }}>Start the game</Typography>
                    <Typography sx={{ width: "180px", m: "auto",p:2 }}>Game rules <br/>
                    Throw dice; choose where to put points
                    </Typography>
                    <Button variant="contained" sx={{height:"50px", width:"200px", m:"auto",mt:2, pt:1.5,fontSize:"22pt"}} onClick={() => {
                        setGameStatus("started")
                    }}>Start</Button>
                </Box>
                : <></>}
            {gameStatus == "started" ?
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <Card sx={{ p: 2, width: "auto", backgroundColor: theme => `${theme.palette.secondary.superlight}` }} >
                            {
                                gameBoard.map((item) => {
                                    return <Box sx={{ display: "grid", gridTemplateColumns: "100px 20px 60px", justifyContent: "space-between", borderBottom: "1px solid black", py: 0.12 }} key={item.id}>
                                        <Typography sx={{ textAlign: "left", pl: 0.5, width: "100px" }} color="text">{item.text}</Typography>
                                        <Typography sx={{ textAlign: "center", width: "20px" }} color="text">{item.score}</Typography>
                                        {dice.length !== 0 && item.isSet == false && !item.text.includes("score") ? (
                                            <Button sx={{ pt: 1, height: "23px", width: "40px" }} color="text" onClick={() => {
                                                if (dice.length !== 0) {
                                                    let tmpBoard = gameBoard;
                                                    tmpBoard[item.id].isSet = true;
                                                    setGameBoard(tmpBoard);
                                                    setChange([])
                                                    setLeft(3)
                                                    setDice([])
                                                    setChange([0, 1, 2, 3, 4])
                                                    bonusPoints(setGameBoard, gameBoard)
                                                    gameOver(setGameStatus, gameBoard)
                                                }
                                            }}>Score</Button>
                                        ):""}
                                    </Box>
                                })
                            }
                        </Card>
                    </Box>
                    <Box sx={{ width: "auto" }}>
                        <Box sx={{ width: "700px", height: "88%", backgroundColor: "", position: "relative" }}>
                            <Typography sx={{ textAlign: "center", fontSize: "16pt" }}>Choose the ones to reroll</Typography>
                            <Box sx={{ height: "25%", width: "100%", backgroundColor: "green", display: "flex", justifyContent: "space-around", py: 2 }}>
                                {
                                    dice.map((die, index) => {
                                        return <div key={index} onClick={(e) => {
                                            if (!change.includes(index)) {
                                                //add to array
                                                let newArr = [index]

                                                setChange([].concat(newArr, change))
                                                // console.log(e.target.checked);
                                            } else {
                                                // console.log(e.target.checked);
                                                // remove from array
                                                setChange(change.filter(x => x !== index));
                                            }
                                        }}>
                                            <Dice pips={die} />
                                            {change.includes(index) ? <Typography>Selected</Typography> : null}
                                            {/* <Checkbox sx={{width: "100%;"}}  color="black" /> */}
                                        </div>
                                    })
                                }
                            </Box>
                            <Box sx={{ mt: "100%", mb: "auto", mx: "auto", position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%)", display: "flex", justifyContent: "space-around", backgroundColor: "orange", width: "300px", height: "50px", display: "flex" }}>
                                <Button variant="contained" size="medium" sx={{ height: "50px" }}
                                    onClick={() => {
                                        if (left > 0 && change.length != 0) {
                                            let array = throwDice(setDice, change, dice)
                                            setDice(array)
                                            pointsPreview(array, setGameBoard, gameBoard)
                                            setChange([])
                                        }
                                    }}>
                                    Roll Dice
                                </Button>
                                <Typography sx={{ py: "13px", height: "50px" }}>{left} Throws Left</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box> : <></>
            }
            {gameStatus == "finished" ?
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection:"column" }}>
                    <Typography variant="h1" sx={{fontSize:"28pt", textAlign:"center", m:"auto", mt:2}}>You got {gameBoard[gameBoard.length - 1].score} points :D</Typography>
                    {/* <Button variant="contained" sx={{height:"50px", width:"100px", m:"auto", mt:2}} onClick={() => {
                        // setGameBoard(playerCard)
                        // setGameStatus("started")
                    }}>Play Again</Button> */}
                </Box>
                : <></>}
        </Container>

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
