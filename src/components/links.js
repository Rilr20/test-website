import React from 'react'
import Link from "next/link";
import { Box } from "@mui/system";
import { Typography } from '@mui/material';

export default function Links() {
    const links = [
        {
            href: "/",
            title: "home"
        },
        {
            href: "/about",
            title: "about"
        },
        {
            href: "/okay",
            title: "okay"
        },
        {
            href: "/fun",
            title: "fun"
        }
    ]
    return (
        <Box sx={{ width: "100%", ml: "0.5em" }}>
            {
                links.map(function (link, i) {
                    return <Typography key={i} sx={{ px: "0.5em", pt: "0.5em", fontSize: { xs: "1.6em", sm: "1.2em" }, display: { sm: "inline", xs: "block" } }}><Link href={link.href}>{link.title.toUpperCase()}</Link></Typography>
                })
            }
            {/* <Typography sx={{px: "0.5em", pt:"0.5em", fontSize:{xs: "1.6em", md: "1.2em"}, display: {md: "inline", xs:"block"} }}><Link href="/about">About</Link></Typography>
      <Typography sx={{px: "0.5em", pt:"0.5em", fontSize:{xs: "1.6em", md: "1.2em"}, display: {md: "inline", xs:"block"} }}><Link href="/okay">Okay</Link></Typography> */}
        </Box>
    )
}
