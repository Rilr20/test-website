import { SaveAs } from '@mui/icons-material';
import { Grid } from '@mui/material'
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from "react";
import OSRSCard from './osrscard';
import {strong, placeholder} from './consts'

export default function OSRSTable() {
const [string, setString] = useState(null);

    const [stuffz, setStuff] = useState(placeholder)
    function fixShit(params) {
        // console.log(params)
        params = params.split('\n')
        let i = 0;
        let shite = placeholder;
        params.forEach(item => {
            // console.log(item);
            let itemArray = item.split(',')
            if (itemArray.length == 3) {
                shite[i].rank = itemArray[0]
                shite[i].lvl = itemArray[1]
                shite[i].xp = itemArray[2]
            }
            i++;
        });
        const newArr= []
        for (let i = 0; i < shite.length; i++) {
            newArr[shite[i].id] = shite[i]
        }
        setStuff(newArr)
        // setStuff(shite.sort(function(a, b) {
        //     return a.id - b.id;
        // }))
    }
    useEffect(() => {
        getOsrs("richpotato99")
        if (stuffz === placeholder) {
            fixShit(strong)
        }
    }, []);
    const getOsrs = async (player) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                // console.log("response");
                setString(this.responseText)
                fixShit(this.responseText)
                return this.responseText;
            }
        }
        xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + player);
        xhr.setRequestHeader("Origin", 'runescape.com');
        xhr.send();
    };
    return (
        <Grid className="osrs" container spacing={0.1} sx={{ display:"grid", textAlign: "center", gap: 0.2, gridTemplateColumns: 'repeat(3, 50px)', p:"0.5em" }}>
            {
                stuffz.map(function (skill, i) {
                    // console.log(skill)
                    return <Grid key={i} sx={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "gray" }} item>
                        <OSRSCard skill={skill.skill} xp={skill.xp} lvl={skill.lvl}></OSRSCard>
                    </Grid>
                })
            } 
        </Grid>
    )
}
