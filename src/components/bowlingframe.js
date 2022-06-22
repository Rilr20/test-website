import React from 'react'
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
export default function BowlingFrame(props) {
    if (props.frames === 2) {
        return (
            <Box sx={{ width: { md: "76px", xs: "33px" }, height: "110px", display: "flex", mx: "0px" }}>
                <Box sx={{ mr: 0.3, backgroundColor: "#fff", width: {md:"76px", xs:"20px"}, height: "78px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    {/* Top row */}
                    <Box sx={{ backgroundColor: "secondary.superlight", width: { md: "38px", xs: "16px" }, height: "30px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[0]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "secondary.superlight", width: {md: "38px", xs: "16px"}, height: "29px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[1]}</Typography>
                    </Box>
                    {/* Bottom row */}
                    <Box sx={{ backgroundColor: "secondary.superlight", width: { md: "76px", xs: "32px" }, height: "28px", gridColumn: "span 2", textAlign: "center", pt: "10px", borderBottom: "1px solid #1c1c1c" }} className="bowling-score">
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.total}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
    if (props.frames === 3) {
        return (
            <Box sx={{ width: { md: "118px", xs: "51px" }, height: "110px", display: "flex", }}>
                <Box sx={{ mr: 0.3, backgroundColor: "#fff", width: { md: "118px", xs: "51px" }, height: "78px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    {/* Top row */}
                    <Box sx={{ backgroundColor: "secondary.superlight", width: { md: "38px", xs: "15px" }, height: "30px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[0]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "secondary.superlight",  width: {md: "39px", xs: "17px"}, height: "29px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[1]}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "secondary.superlight",  width: {md: "37px", xs: "17px"}, height: "29px", textAlign: "center", pt: "10px", borderLeft: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c", borderTop: "1px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.framePoints[2]}</Typography>
                    </Box>
                    {/* Bottom row */}
                    <Box sx={{ backgroundColor: "secondary.superlight", width: { md: "116px", xs: "51px" }, height: "28px", gridColumn: "span 3", textAlign: "center", pt: "10px", borderBottom: "1px solid #1c1c1c", borderRight: "1px solid #1c1c1c" }} className="bowling-score">
                        <Typography sx={{ lineHeight: "initial", fontSize: "14pt" }}>{props.total}</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }


}
