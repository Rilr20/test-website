import React from 'react'
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function BowlingFrame(props) {
    if (props.frames === 2) {
        return (
            <Box sx={{ backgroundColor: "orange", width: "78px", height: "200px", display: "flex", mx: "0px" }}>
                <Box sx={{ mr: 0.3, backgroundColor: "#fff", width: "76px", height: "78px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <Box sx={{ backgroundColor: "red", width: "37px", height: "30px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[0]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "brown", width: "39px", height: "29px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[1]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "pink", width: "77px", height: "28px", gridColumn: "span 2", textAlign: "center", pt: "10px", borderBottom: "1px solid #1c1c1c" }} className="bowling-score">
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.total}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
    if (props.frames === 3) {
        return (
            <Box sx={{ backgroundColor: "orange", width: "120px", height: "200px", display: "flex", }}>
                <Box sx={{ mr: 0.3, backgroundColor: "#fff", width: "118px", height: "78px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    <Box sx={{ backgroundColor: "red", width: "36px", height: "30px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[0]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "brown", width: "39px", height: "29px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[1]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "brown", width: "39px", height: "29px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[2]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "pink", width: "116px", height: "28px", gridColumn: "span 3", textAlign: "center", pt: "10px", borderBottom: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c" }} className="bowling-score">
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.total}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }


}
