import { Box, Typography } from '@mui/material'
import React from 'react'
import PieceSVG from './svg/piecesvg'

Chessboard.defaultProps = {
    text: true,
    width: "40px"
}
export default function Chessboard(props) {
    let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h"]
    letterArray = letterArray.reverse()
    const runCallback = (cb) => {
        return cb();
    };
    function getHalfValue(width) {
        width = width.split("px")
        let half = parseInt(width[0] / 2)

        return half
    }
    let half = getHalfValue(props.width)
    console.log(half);
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: props.text === true ? `${half}px repeat(8, ${props.width})` : `repeat(8, ${props.width})` }}>
            {
                runCallback(() => {
                    let elements = []
                    let colour = "chess.white"
                    if (props.text) {
                        for (let i = 0; i < letterArray.length; i++) {
                            elements.push(<Box width={props.width} height={props.width}><Typography sx={{ textAlign: "center" }}>{letterArray[i]}</Typography></Box>)
                        }
                        elements.push(<Box width={half + "px"} height={half + "px"}></Box>)

                    }
                    for (let j = 0; j < letterArray.length; j++) {
                        colour = colour == "chess.white" ? "chess.black" : "chess.white"
                        for (let i = 0; i < letterArray.length; i++) {
                            colour = colour == "chess.white" ? "chess.black" : "chess.white"
                            elements.push(<Box id={letterArray[i] + (j + 1)} width={props.width} height={props.width} sx={{ borderTop: "1px solid black", borderLeft: "1px solid black", backgroundColor: colour }}>
                                {console.log((letterArray[i] + (j + 1)))}
                                {console.log(props.piecePosition[0].position)}
                                {console.log((letterArray[i] + (j + 1)) == props.piecePosition[0].position)}
                                {(letterArray[i] + (j + 1)) == props.piecePosition[0].position ? <PieceSVG piece={props.piecePosition[0].piece} colour={props.piecePosition[0].side} size={props.pieceSize} /> :<></>}
                            </Box>)
                        }
                        if(props.text) {
                            elements.push(<Box width={half + "px"} height={half + "px"}><Typography sx={{textAlign:"center", my:"70%"}}>{j + 1}</Typography></Box>)
                        }
                    }

                    return elements.reverse()
                })
            }
        </Box>
    )
}
