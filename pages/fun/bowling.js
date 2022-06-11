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
    const [bowlingScore, setBowlingScore] = useState(bowlingCard);
    useEffect(() => {
        setBowlingScore(bowlingCard)
    }, []);
    console.log(bowlingScore);
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {
                    bowlingScore.map((item, key) => {
                        return <BowlingFrame key={key} frames={item.length - 1} total={item[-1]} framePoints={item} />
                    })
                }
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }} >

                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>1</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>2</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>3</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>4</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>5</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>6</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>7</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>8</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
                })}>9</Button>
                <Button variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                    bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore)
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
