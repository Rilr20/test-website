import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/system';
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Grid } from '@mui/material'

export default function OSRSCard(props) {
    const xp = props.xp
    const xpFormated = props.xp==undefined ? null : xp.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    if (props.skill != "total level") {
        return (
            <Box>
                <Box sx={{ display: "flex", border: "#302d25", p: "0.2em" }} title={`${props.skill} XP: ${xpFormated}`} >
                    <Box sx={{ mt: "0.3em", width: "20px", height: "20px" }}>
                        {/* <Image className="img inline" width="20px" height="20px" src={"/img/skills/" + props.skill + ".png"} alt="attack"></Image> */}
                        <img className="skill-icon" src={"/img/skills/" + props.skill + ".png"} alt={props.skill}></img>
                    </Box>
                    <Box sx={{ mt: "0.3em", ml: "0.2em" }}>{props.lvl}</Box>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>
                <Box sx={{ display: "flex", border: "#302d25" }} title={`${props.skill} XP: ${xpFormated}`} >
                    <Box sx={{ fontSize: "12px", display: "block", textAlign: "center" }}>{props.skill} {props.lvl}</Box>
                </Box>
            </Box>
        )
    }

}
