import React from 'react'
import LayoutBase from "../../src/template/layoutbase";
import BasicLayout from "../../src/template/basiclayout";
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BowlingFrame from '../../src/components/bowlingframe';

Bowling.PageTitle = 'Bowling | Website'


export default function Bowling() {
    return (
        <Container sx={{ width: "96%", height: "100%", pt: 2, mt: 0.3, }}>
            {/* <Box sx={{ backgroundColor: "orange", width: "100%", height: "200px", display: "flex", }}>
                <Box sx={{ mr: 0.3, backgroundColor: "#fff", width: "78px", height: "78px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <Box sx={{ backgroundColor: "red", width: "38px", height: "30px", textAlign: "center", pt: "10px" }}>
                        <Typography sx={{ lineHeight: "initial" }}>2</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "brown", width: "38px", height: "28px", textAlign: "center", pt: "10px", borderLeft: "2px solid #1c1c1c", borderBottom: "2px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", }}>3</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "pink", width: "78px", height: "28px", gridColumn: "span 2", textAlign: "center", pt: "10px" }}>
                        <Typography sx={{ lineHeight: "initial" }}>42</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "orange", width: "100%", height: "200px", display: "flex", }}>
                <Box sx={{ mr: 0.3, backgroundColor: "#fff", width: "118px", height: "78px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    <Box sx={{ backgroundColor: "red", width: "38px", height: "30px", textAlign: "center", pt: "10px" }}>
                        <Typography sx={{ lineHeight: "initial" }}>2</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "brown", width: "38px", height: "28px", textAlign: "center", pt: "10px", borderLeft: "2px solid #1c1c1c", borderBottom: "2px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", }}>3</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "brown", width: "38px", height: "28px", textAlign: "center", pt: "10px", borderLeft: "2px solid #1c1c1c", borderBottom: "2px solid #1c1c1c" }}>
                        <Typography sx={{ lineHeight: "initial", }}>3</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "pink", width: "118px", height: "28px", gridColumn: "span 3", textAlign: "center", pt: "10px" }}>
                        <Typography sx={{ lineHeight: "initial" }}>42</Typography>
                    </Box>
                </Box>
            </Box> */}
            <Box sx={{display:"flex"}}>
                <BowlingFrame frames={2} total={42} framePoints={[2,3,5]}/>
                <BowlingFrame frames={2} total={612} framePoints={[2,2,5]}/>
                <BowlingFrame frames={2} total={52} framePoints={[2,6,5]}/>
                <BowlingFrame frames={3} total={12} framePoints={[2,1,5]} />

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
