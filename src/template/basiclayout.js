import React from 'react'
import Navbar from '../components/navbar';
import Head from 'next/head'
import Footer from '../components/footer';

export default function BasicLayout({ children }) {
    const PageTitle = children.type.PageTitle
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
        case "sunny":
        case "clear":
            weather = "sunny"
            break;

        case "thunder":
            weather = "thunder"
            break;

        case "cloudy":
            weather = "cloudy"
            break;

        case "overcast":
            weather = "overcast"
            break;

        case "fog":
        case "mist":
            weather = "fog"
            break;

        case "drizzle":
        case "rain":
            weather = "rain"
            break;

        case "pellets":
        case "snow":
        case "sleet":
        case "blizzard":
            weather = "snow"
            break;

        default:
            weather = "default"
            break;
    }
    return weather;
}