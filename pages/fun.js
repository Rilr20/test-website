import React from 'react'
import Link from "next/link";
import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Dice from '../src/components/dice';

Fun.PageTitle = 'Fun | Website'

export default function Fun() {

    return (
        <Container maxWidth="xl" sx={{ width: "96%", maxWidth: "100vw", height: "100%", pt: 2, mt: 0.3 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={3}>
                    <Card sx={{ minHeight: "150px", textAlign: "center", backgroundColor: "secondary.light",pb:2 }}>
                        <Box>
                            <Typography variant="h1" sx={{ fontSize: "22pt", mt: 2 }}>
                                <Link href="fun/dicegame">DiceGame</Link><br />
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ m: "auto", width: "54px", p: 2 }}>
                                <Dice pips={6} />
                            </Box>
                            <Box sx={{ flexGrow: 1, mt: "20px" }}>
                                <Typography sx={{ px: 1, textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime a perferendis explicabo voluptas distinctio laudantium, quos consequuntur ratione
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card sx={{ minHeight: "150px", textAlign: "center", backgroundColor: "secondary.light",pb:2 }}>
                        <Box>
                            <Typography variant="h1" sx={{ fontSize: "22pt", mt: 2 }}>
                                <Link href="fun/bowling">Bowling</Link><br />
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ m: "auto", width: "54px", p: 2, mt:"24px" }}>
                                <div className="circle large">
                                    <div className="circle small"></div>
                                    <div className="circle small"></div>
                                    <div className="circle small"></div>
                                </div>
                            </Box>
                            <Box sx={{ flexGrow: 1, mt: "20px" }}>
                                <Typography sx={{ px: 1, textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime a perferendis explicabo voluptas distinctio laudantium, quos consequuntur ratione
                                </Typography>
                            </Box>
                        </Box>
                    </Card>

                </Grid>
            </Grid>
        </Container>
    )
}

Fun.getLayout = function getLayout(page) {
    return (
        <LayoutBase>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}
