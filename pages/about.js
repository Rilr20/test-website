import React, { useEffect } from 'react'
import LayoutBase from "../src/template/layoutbase";
import BasicLayout from "../src/template/basiclayout";
import externals from '../src/modules/externals';

About.PageTitle = 'About | Website'
export async function getServerSideProps() {

    // const data = await externals.getWeather()
    const data ="thunder"
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
    //coolt om stylen ändrades beroende på vädret hur funkar det 🤔
    return (
        <div>
            {data}
            {/* {data.current.condition.text} */}
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
        </div>
    )
}
function trimResult(params) {
    // console.log(params);
    const text = params.toLowerCase()
    const match = text.match(/(sunny|clear|cloudy|overcast|fog|mist|drizzle|rain|pellets|snow|sleet|blizzard|thunder)/gmi)
    if (match instanceof Array && match.length > 1) {
        return match[1]
    } 
    // console.log(match);
    return match
}
// http://api.weatherapi.com/v1/forecast.json?key=d24851f0ead347a698f203014221805&q=lund&days=1&aqi=no&alerts=no
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
        case "sunny": //ljus och skön
        case "clear":
            weather = "sunny"
            break;

        case"thunder": //gul som accentfärg 
            weather = "thunder"
            break;

        case "cloudy": //ljus och mindre skön
            weather = "clouds"
            break;

        case "overcast": // grå och trist
            weather = "grey"
            break;

        case "fog":
        case "mist": //transparant?
            weather = "transparent"
            break;

        case "drizzle":
        case "rain": //blåa färger
            weather = "blue"
            break;

        case "pellets":
        case "snow":
        case "sleet":
        case "blizzard": //vita färger
            weather = "white"
            break;

        default:
            // console.log("DEULFAUFLÖASFJHAKSL");
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