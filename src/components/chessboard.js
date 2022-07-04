import { Box, Typography } from '@mui/material'
import React from 'react'
import PieceSVG from './svg/piecesvg'

Chessboard.defaultProps = {
    text: true,
    width: "40px",
    piecePosition: [],
    pieceSize: 55
}
export default function Chessboard(props) {
    let letterArray = ["h", "g", "f", "e", "d", "c", "b", "a"]
    let half = getHalfValue(props.width)
    let elements = []
    let gridTemplateColumns = `repeat(8, ${props.width})`
    const colour = ["chess.white", "chess.black"];
    const runCallback = (cb) => {
        return cb();
    };

    function getHalfValue(width) {
        width = width.split("px")
        let half = parseInt(width[0] / 2)

        return half
    }

    if (props.text) {
        gridTemplateColumns = `${half}px repeat(8, ${props.width})`

        for (let i = 0; i < letterArray.length; i++) {
            elements.push(<Box key={letterArray[i]} width={props.width} height={props.width}><Typography sx={{ textAlign: "center" }}>{letterArray[i]}</Typography></Box>)
        }
        elements.push(<Box key="none" width={half + "px"} height={half + "px"}></Box>)
    }

    return (
        <Box sx={{ display: "grid", gridTemplateColumns: gridTemplateColumns }}>
            {
                runCallback(()=> {
                    let position = ""
                    for (let j = 0; j < letterArray.length; j++) {
                        colour.reverse()
                        for (let i = 0; i < letterArray.length; i++) {
                            colour.reverse()
                            position = letterArray[i] + (j + 1)
                            elements.push(<Box onClick={(e) => {
                                console.log("i am position " + e.currentTarget.id)
                            }} key={position} id={position} width={props.width} height={props.width} sx={{ borderTop: "1px solid black", borderLeft: "1px solid black", backgroundColor: colour[0] }}>
                                {
                                    props.piecePosition.map((piece) => {
                                        if (position === piece.position) {
                                            return <PieceSVG piece={piece.piece} colour={piece.side} size={props.pieceSize} />
                                        }
                                    })
                                }
                            </Box>)
                        }
                        if (props.text) {
                            elements.push(<Box key={j + 1} width={half + "px"} height={half + "px"}><Typography sx={{ textAlign: "center", my: "70%" }}>{j + 1}</Typography></Box>)
                        }
                    }

                    return elements.reverse()
                })
            }
        </Box>
    )
}
