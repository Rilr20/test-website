import { Grid } from '@mui/material'
import React from 'react'
import OSRSCard from './osrscard';

export default function OSRSTable(props) {
    return (
        <Grid className="osrs" container spacing={0.1} sx={{ display:"grid", textAlign: "center", gap: 0.2, gridTemplateColumns: 'repeat(3, 50px)', p:"0.5em", justifyContent: "center" }}>
            {
                props.osrs.map(function (skill, i) {
                    return <Grid key={i} sx={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#494035" }} item>
                        <OSRSCard skill={skill.skill} xp={skill.xp} lvl={skill.lvl}></OSRSCard>
                    </Grid>
                })
            } 
        </Grid>
    )
}
