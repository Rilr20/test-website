import React, { useEffect } from 'react'
import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";
import externals from '../src/modules/externals';
import { Container, Typography, Card, Grid } from "@mui/material";

About.PageTitle = 'About | Website'
export async function getServerSideProps() {

    // const data = await externals.getWeather()
    const data ="sleet"
    // const data = null;
    // if (!data ) {
    //     return {
    //         notFound: true
    //     }
    // }
    
    return {
        props: {
            data: data
        }
    }
}

export default function About({data}) {
    useEffect(() => {
    }, []);
    return (
        <div>
            {data}
            <Grid sx={{ display: "grid", textAlign: "center", gridTemplateColumns: 'repeat(2, 150px)', justifyContent: "center" }}>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.superlight}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">superlight</Typography>
                    </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.superlight}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">superlight</Typography>
                    </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.light}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">light</Typography>
                    </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.light}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">light</Typography>
                    </Card>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.main}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">main</Typography>
                    </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.main}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">main</Typography>
                    </Card>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.dark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">dark</Typography>
                    </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.dark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">dark</Typography>
                    </Card>

                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.primary.superdark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">superdark</Typography>
                    </Card>
                <Card sx={{ textAlign: "center", backgroundColor: theme => `${theme.palette.secondary.superdark}`, height: "100px", width: "100px", mx: "auto", my: "1em" }}>
                    <Typography color="text">superdark</Typography>
                    </Card>
            </Grid>
        </div>
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
About.getLayout = function  getLayout(page) {
    const currentCondition = "Sunny and the moon".toLowerCase()
    // const currentCondition = page.props.data.current.condition.text
    const res = {
        "current": {
            "condition": {
                text: "default"
            }
        }
    }
    const trimmed = trimResult(currentCondition)
    let weather;
    switch (trimmed[0]) {
        case "sunny": 
        case "clear":
            weather = "sunny"
            break;

        case"thunder":
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