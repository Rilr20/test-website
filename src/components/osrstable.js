import { SaveAs } from '@mui/icons-material';
import { Grid } from '@mui/material'
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from "react";
import OSRSCard from './osrscard';


export default function OSRSTable(props) {
const [string, setString] = useState(null);
    const [stuffz, setStuff] = useState("")
    // const [osrs, setOsrs] = useState(placeholder)
    // console.log(props)
    useEffect(() => {
        // if (stuffz === placeholder) {
        //     // addToDict(osrs)
        // }
    }, []);

    return (
        <Grid className="osrs" container spacing={0.1} sx={{ display:"grid", textAlign: "center", gap: 0.2, gridTemplateColumns: 'repeat(3, 50px)', p:"0.5em", justifyContent: "center" }}>
            {
                props.osrs.map(function (skill, i) {
                    // console.log(skill)
                    return <Grid key={i} sx={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#494035" }} item>
                        <OSRSCard skill={skill.skill} xp={skill.xp} lvl={skill.lvl}></OSRSCard>
                    </Grid>
                })
            } 
        </Grid>
    )
}

