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
    const runCallback = (cb) => {
        return cb();
    };
    function doesstuff() {
        let index= bowlinglogic.findEmptySlot(bowlingScore)
        if (bowlingScore[index-1][1].length !== 0) {
            setLastPoint(0)
        }
    }
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {
                    bowlingScore.map((item, key) => {
                        return <BowlingFrame key={key} frames={item.length} total={bottomRow[key]} framePoints={displayScore[key]} />
                    })
                }
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: {md:"100px 100px 100px 100px 100px 100px", xs:"100px 100px 100px"}, gridRowGap:"1em", justifyContent: "center" }} >
                {
                    runCallback(() => {
                        const elements = []
                        for (let i = 10; i >= 0; i--) {
                            elements.push(<Button key={i} disabled={10 - lastPoint >= i ? false : true} variant="contained" sx={{ mx: 1 }} onClick={((e) => {
                                bowlinglogic.addToArray(e.target.innerText, setBowlingScore, bowlingScore, setBottomRow, setDisplayScore)
                                let num = lastPoint + parseInt(e.target.innerText)
                                setLastPoint(parseInt(num == 10 ? 0 : num))
                                doesstuff()
                            })}>{i}</Button>)
                        }
                        return elements
                    })
                }
                {/* new game button */}
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-around", mt:2}}>
            <Button variant="contained" sx={{m:""}}  onClick={(()=> {
                let newBowlingCard = []
                bowlingCard.forEach(frame => {
                    newBowlingCard.push(["",""])
                    if (frame.length == 3) {
                        newBowlingCard[newBowlingCard.length-1].push("")
                    } 
                });
                setBowlingScore(newBowlingCard)
                setDisplayScore(newBowlingCard)
                setBottomRow([])
                setLastPoint(0)
            })}>New Game</Button>

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
