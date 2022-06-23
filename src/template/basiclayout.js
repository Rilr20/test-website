import React from 'react'
import Navbar from '../components/navbar';
import Head from 'next/head'
import Footer from '../components/footer';

export default function BasicLayout({ children }) {
    const PageTitle = children.type.PageTitle
    // const weather = children.props.weather
    // console.log(children);
    const weather = getName(children.props.data)
    return (
        <>
            {PageTitle ? (<Head><link rel="shortcut icon" href="/favicon.ico"/><title>{PageTitle}</title></Head>) : ''}
            <Navbar img={weather} />
            <div>{children}</div>
            <Footer />
        </>
    )
}
function getName(params) {
    let weather = ""
    switch (params) {
        case "sunny": //ljus och skön
        case "clear":
            weather = "sunny"
            break;

        case "thunder": //gul som accentfärg 
            weather = "thunder"
            break;

        case "cloudy": //ljus och mindre skön
            weather = "cloudy"
            break;

        case "overcast": // grå och trist
            weather = "overcast"
            break;

        case "fog":
        case "mist": //transparant?
            weather = "fog"
            break;

        case "drizzle":
        case "rain": //blåa färger
            weather = "rain"
            break;

        case "pellets":
        case "snow":
        case "sleet":
        case "blizzard": //vita färger
            weather = "snow"
            break;

        default:
            weather = "default"
            break;
    }
    return weather;
}