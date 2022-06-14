import React, { useEffect, useState } from 'react'
import LayoutBase from "../../src/template/layoutbase";
import BasicLayout from "../../src/template/basiclayout";
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BowlingFrame from '../../src/components/bowlingframe';
import bowlinglogic from '../../src/components/bowlinglogic';
import { bowlingCard } from '../../src/components/consts';

Bowling.PageTitle = 'Bowling | Website'


export default function Bowling() {
    // const [bowlingArray, setbowlingArray] = useState([]);
    const [bowlingScore, setBowlingScore] = useState(bowlingCard);
    const [displayScore, setDisplayScore] = useState(bowlingCard);
    const [bottomRow, setBottomRow] = useState([]);
    const [lastPoint, setLastPoint] = useState(0);
    useEffect(() => {
        setBowlingScore(bowlingCard)
        setLastPoint(0)
    }, []);
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {
                    bowlingScore.map((item, key) => {
                        let length = 2
                        if (key == 9) {
                            length = 3
                        }
                        // // console.log(bottomRow);
                        return <BowlingFrame key={key} frames={length} total={bottomRow[key]} framePoints={displayScore[key]} />
                    })
                }
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} >
                <Button disabled={10 - lastPoint >= 1 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>1/{bottomRow.length}/{bowlingScore.length}/{displayScore.length }</Button>
                <Button disabled={10 - lastPoint >= 2 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>2</Button>
                <Button disabled={10 - lastPoint >= 3 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>3</Button>
                <Button disabled={10 - lastPoint >= 4 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>4</Button>
                <Button disabled={10 - lastPoint >= 5 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    let res = bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                    // console.log(res[1]);
                })}>5</Button>
                <Button disabled={10 - lastPoint >= 6 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                    // console.log(bottomRow);
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>6</Button>
                <Button disabled={10 - lastPoint >= 7 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>7</Button>
                <Button disabled={10 - lastPoint >= 8 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>8</Button>
                <Button disabled={10 - lastPoint >= 9 ? false:true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>9</Button>
                <Button disabled={10 - lastPoint >= 10 ? false : true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>10</Button>
                <Button  variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                    // console.log(bowlingScore);
                    setLastPoint(parseInt(e.target.innerText))
                })}>0</Button>

            </Box>
        </Container>
    )
}
Bowling.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}
