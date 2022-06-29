import { Box, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ClosingCodeIcon from './svg/closecodeicon';
import Link from 'next/link';

export default function Footer() {
    let router = useRouter()
    return (
        <Box sx={{ color: "text.primary", fontSize: "18pt" }}>
            <Divider sx={{ width: "95%", m: "auto", my: 2, borderColor: "primary.superdark" }} />
            <Box sx={{ backgroundColor: "blue", width: "100%", height: {md:"80px", xs:"100%"}, display: "flex", flexDirection: { md: "row", xs:"column"} }}>
                <Box sx={{ backgroundColor: "gray", width: {md:"20%", xs:"100%"}, m: "auto", fontSize: "30px", height: "30px", my: "25px", display: "flex", justifyContent: "space-around" }}>
                        <Link href="#">
                            <a>
                                <LinkedInIcon fontSize="20px" />
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <GitHubIcon fontSize="20px" />
                            </a>
                        </Link>
                        {/* <ClosingCodeIcon width="30px" height="30px" /> */}
                </Box>
                <Box sx={{ backgroundColor: "red", width: { md: "35%", xs: "100%" }, m: "auto", height: "80px", height: "30px", my: "25px", display: "flex", justifyContent: "space-around" }}>
                        <Typography sx={{ fontSize: "18pt" }}>&copy; 2022 &gt;:)</Typography>
                        <Typography sx={{ fontSize: "18pt" }}>skapad av mich</Typography>

                </Box>
                <Box sx={{ backgroundColor: "green", width: {md:"20%", xs:"100%"}, m: "auto", height: "30px", my: "25px", display: "flex", justifyContent: "space-around"  }}>
                        {
                            router.locales.map((locale, key) => {
                                return (
                                    <Typography fontSize="18pt" key={key}><Link href={router.asPath} locale={locale}>{locale.toUpperCase()}</Link></Typography>
                                )
                            })
                        }
                </Box>
            </Box>
        </Box>
    )
}