import { throwDice, pointsPreview, bonusPoints, gameOver } from './dicegamelogic'
import React from 'react'
import { Typography, Card, Button, Box } from "@mui/material";
import Dice from "./dice";

export default function GameBoard({ setGameBoard, gameBoard, setChange, change, dice, setDice, setLeft, left, setGameStatus }) {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Card sx={{ p: 2, width: "auto", backgroundColor: theme => `${theme.palette.secondary.superlight}` }} >
                        {
                            gameBoard.map((item) => {
                                return <Box sx={{ display: "grid", gridTemplateColumns: "100px 20px 60px", justifyContent: "space-between", borderBottom: "1px solid black", py: 0.12 }} key={item.id}>
                                    <Typography sx={{ textAlign: "left", pl: 0.5, width: "100px", color: "text.primary" }} >{item.text}</Typography>
                                    <Typography sx={{ textAlign: "center", width: "20px", color: "text.primary" }} >{item.score}</Typography>
                                    {dice.length !== 0 && item.isSet == false && !item.text.includes("score") ? (
                                        <Button sx={{ pt: 1, height: "23px", width: "40px", color: "text.primary" }} onClick={() => {
                                            let tmpBoard = gameBoard;
                                            tmpBoard[item.id].isSet = true;
                                            setGameBoard(tmpBoard);
                                            setChange([])
                                            setLeft(3)
                                            setDice([])
                                            setChange([0, 1, 2, 3, 4])
                                            bonusPoints(setGameBoard, gameBoard)
                                            pointsPreview([], setGameBoard, gameBoard)
                                            gameOver(setGameStatus, gameBoard)
                                        }}>Score</Button>
                                    ) : ""}
                                </Box>
                            })
                        }
                    </Card>
                </Box>
                <Box sx={{ width: "auto" }}>
                    <Box sx={{ width: "700px", height: "88%", backgroundColor: "", position: "relative" }}>
                        <Typography sx={{ textAlign: "center", fontSize: "16pt" }}>Choose the ones to reroll</Typography>
                        <Card sx={{ height: "25%", width: "100%", backgroundColor: "primary.superlight", display: "flex", justifyContent: "space-around", pb: 2, pt: "36px" }}>
                            {
                                dice.map((die, index) => {
                                    return <div key={index} onClick={(e) => {
                                        if (!change.includes(index)) {
                                            let newArr = [index]
                                            setChange([].concat(newArr, change))
                                        } else {
                                            setChange(change.filter(x => x !== index));
                                        }
                                    }}>
                                        <Dice pips={die} />
                                        {change.includes(index) ? <Typography>Selected</Typography> : null}
                                    </div>
                                })
                            }
                        </Card>
                        <Card sx={{ mt: "100%", mb: "auto", mx: "auto", position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%)", display: "flex", justifyContent: "space-around", backgroundColor: "secondary.main", width: "300px", height: "50px", display: "flex",p:1 }}>
                            <Button variant="contained" size="medium" sx={{ height: "50px" }}
                                onClick={() => {
                                    if (left > 0 && change.length != 0) {
                                        let array = throwDice(setDice, change, dice)
                                        setDice(array)
                                        pointsPreview(array, setGameBoard, gameBoard)
                                        setLeft(left - 1)
                                        setChange([])
                                    }
                                }}>
                                Roll Dice
                            </Button>
                            <Typography sx={{ py: "13px", height: "50px" }}>{left} Throws Left</Typography>
                        </Card>
                    </Box>
                </Box>
            </Box></>
    )
}
