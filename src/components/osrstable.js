import { SaveAs } from '@mui/icons-material';
import { Grid } from '@mui/material'
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from "react";
import OSRSCard from './osrscard';

export default function OSRSTable() {
const strong=`162661,2020,128011410
415103,90,5624200
373169,90,5572081
695914,90,5377000
527040,94,8377182
527332,92,6759609
280524,80,2025583
614880,88,4516430
152243,99,13087086
296440,84,3239182
37767,99,13436954
297317,84,3190062
132652,99,13057431
81748,99,13066339
206842,83,2831366
287909,80,2026254
141037,90,5352838
197661,80,2101524
167757,86,3728089
307672,88,4839659
352766,83,2893225
139055,82,2562532
286559,78,1700445
301323,82,2646339
-1,-1
-1,-1
-1,-1
34989,674
38276,44
161330,23
12915,502
164135,95
264855,5
131632,5
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
317715,11
-1,-1
-1,-1
282850,209
-1,-1
-1,-1
96608,1
-1,-1
-1,-1
-1,-1
16968,34
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
-1,-1
157148,295
90506,576
80574,62
-1,-1
`
const [string, setString] = useState(null);
const placeholder = [
    {
        id: 23,
        skill: "total level",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 0,
        skill: "attack",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 6,
        skill: "defence",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 3,
        skill: "strength",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 1,
        skill: "hitpoints",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 9,
        skill: "ranged",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 12,
        skill: "prayer",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 15,
        skill: "magic",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 11,
        skill: "cooking",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 17,
        skill: "woodcutting",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 16,
        skill: "fletching",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 8,
        skill: "fishing",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 14,
        skill: "firemaking",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 13,
        skill: "crafting",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 5,
        skill: "smithing",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 2,
        skill: "mining",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 7,
        skill: "herblore",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 4,
        skill: "agility",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 10,
        skill: "thieving",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 19,
        skill: "slayer",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 20,
        skill: "farming",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 18,
        skill: "runecraft",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 22,
        skill: "hunter",
        rank: null,
        lvl: null,
        xp: null
    },
    {
        id: 21,
        skill: "construction",
        rank: null,
        lvl: null,
        xp: null
    }
]
    const [stuffz, setStuff] = useState(placeholder)
    function fixShit(params) {
        console.log("paramasdhiashfjklsdhagkjlahsdgjklahasdglkjahsdljkghakljsdgh")
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
        console.log(stuffz)
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
