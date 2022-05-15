import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/system';
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Grid } from '@mui/material'

export default function OSRSCard(props) {
    if (props.skill != "total level") {
        return (
            <Box>
                <Box sx={{ display: "flex", border: "#302d25", p: "0.2em" }} title={`${props.skill} XP: ${props.xp}`} >
                    <Box sx={{ mt: "0.3em" }}>
                        <Image className="img inline" width="20px" height="20px" src={"/img/skills/" + props.skill + ".png"} alt="attack"></Image>
                    </Box>
                    <Box sx={{ mt: "0.3em", ml: "0.2em" }}>{props.lvl}</Box>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>
                <Box sx={{ display: "flex", border: "#302d25" }} title={`${props.skill} XP: ${props.xp}`} >
                    <Box sx={{ fontSize: "12px", display: "block", textAlign: "center" }}>{props.skill} {props.lvl}</Box>
                </Box>
            </Box>
        )
    }

}
