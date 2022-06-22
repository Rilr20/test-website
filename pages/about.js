import React, { useEffect } from 'react'
import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";
import externals from '../src/modules/externals';
import { Container, Typography, Card, Grid, Box } from "@mui/material";
import Customcard from '../src/components/customcard';
import Image from 'next/image';

About.PageTitle = 'About | Website'
export async function getServerSideProps() {
    let data = null
    // data = await externals.getWeather()
    // const data ="sleet"
    // const data = null;
    if (!(data instanceof Object)) {
        return {
            props: {
                data: "error"
            }
        }
    }
    let res = trimResult(data.current.condition.text)
    return {
        props: {
            data: res[0]
        }
    }
}

export default function About({ data }) {
    useEffect(() => {
    }, []);
    return (
        <Container maxWidth="xl" sx={{ width: "auto", height: "100%", pt: 2, mt: 0.3, color: "text" }}>
            <Box sx={{ width: "auto", height: "100vh", backgroundColor: "orange", p: 1, display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
                <Customcard width="500px" height="300px">
                    {/* <Box sx={{ backgroundImage: `url(/img/default.avif)`, width:"100%",height:"250px"}}></Box> */}
                    <Box sx={{ display: "flex" }}>
                        <div>
                            <Image className="about-img" width="200px" height="200px" src="/img/me.jpg" alt="bild<"></Image>
                            <Typography>
                                me irl
                            </Typography>
                        </div>
                        <Box sx={{m:2, width:"300px", height:"100%"}}>
                            <Typography variant="h1" sx={{ fontSize: "32pt", textAlign:"center" }}>About</Typography>
                            <Typography>Sida för skojs skull, lägger upp en massa skit. </Typography>
                            <Typography>Gjord med Nextjs, och annat gott</Typography>
                        </Box>
                    </Box>
                </Customcard>
                <Customcard width="350px" height="300px">
                    <Typography variant="h1" sx={{ mt: 2, fontSize:"32pt" }}>
                        Olika Stiler
                    </Typography>
                    <Typography>Denna sidan (/about) borde ändra sig beroende på vädret, med hjälp av ett väder API. Andra saker som har gjorts är ett tärningsspel, och ett poängräknare för bowling</Typography>

                </Customcard>

            </Box>
            <Box sx={{ backgroundColor: theme => `${theme.palette.secondary.superlight}`, width: "250px", height: "200px", position: "relative", borderTopLeftRadius: "10px", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px", borderTopRightRadius: "10px", m: "auto", mt: 2, boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)" }}>
                <Box sx={{ backgroundColor: theme => `${theme.palette.primary.superlight}`, width: "250px", height: "170px", position: "absolute", bottom: 0, textAlign: "center", borderRadius: "8px 8px 4px 4px" }}>
                    <Typography sx={{ mt: 2 }}>
                        {data}
                    </Typography>
                </Box>
            </Box>
            <Grid sx={{ display: "grid", textAlign: "center", gridTemplateColumns: 'repeat(2, 150px)', justifyContent: "center" }}>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.superlight}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>superlight</Typography>
                </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.superlight}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>superlight</Typography>
                </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.light}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>light</Typography>
                </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.light}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>light</Typography>
                </Card>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.main}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>main</Typography>
                </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.main}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>main</Typography>
                </Card>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.dark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>dark</Typography>
                </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.dark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>dark</Typography>
                </Card>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.superdark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>superdark</Typography>
                </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.superdark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography>superdark</Typography>
                </Card>
            </Grid>
        </Container>
    )
}
function trimResult(params) {
    const text = params.toLowerCase()
    const match = text.match(/(sunny|clear|cloudy|overcast|fog|mist|drizzle|rain|pellets|snow|sleet|blizzard|thunder)/gmi)
    if (match instanceof Array && match.length > 1) {
        return match[1]
    }
    return match
}
About.getLayout = function getLayout(page) {
    let weather;
    switch (page.props.data) {
        case "sunny":
        case "clear":
            weather = "sunny"
            break;

        case "thunder":
            weather = "thunder"
            break;

        case "cloudy":
            weather = "clouds"
            break;

        case "overcast":
            weather = "grey"
            break;

        case "fog":
        case "mist":
            weather = "transparent"
            break;

        case "drizzle":
        case "rain":
            weather = "blue"
            break;

        case "pellets":
        case "snow":
        case "sleet":
        case "blizzard":
            weather = "white"
            break;

        default:
            weather = "default"
            break;
    }
    return (
        <LayoutBase weather={weather}>
            <BasicLayout>
                {page}
            </BasicLayout>
        </LayoutBase>
    )
}