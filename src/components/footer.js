import { Box, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ClosingCodeIcon from './svg/closecodeicon';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'
import FlagSE from './svg/flagse';
import FlagGB from './svg/flaggb';
import Flag from './svg/flag';

export default function Footer() {
    const { t } = useTranslation()
    let router = useRouter()
    let currYear = new Date()
    return (
        <Box sx={{ color: "text.primary", fontSize: {md:"18pt", xs:"16pt"} }}>
            <Divider sx={{ width: "95%", m: "auto", my: 2, borderColor: "primary.superdark" }} />
            <Box sx={{ backgroundColor: "", width: {md:"70%", xs:"100%"},m:"auto", height: { md: "80px", xs: "100%" }, display: "flex", flexDirection: { md: "row", xs: "row" } }}>
                <Box sx={{ backgroundColor: "", width: { md: "10%", xs: "100%" }, m: "auto", fontSize: "30px", height: "30px", my: "25px", display: "flex", justifyContent: "space-around" }}>
                    <Link href="#">
                        <a>
                            <LinkedInIcon sx={{ fontSize: {md:"25pt", xs:"20pt"} }} />
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <GitHubIcon sx={{ fontSize: {md:"25pt", xs:"20pt"} }} />
                        </a>
                    </Link>
                    {/* <ClosingCodeIcon width="30px" height="30px" /> */}
                </Box>
                <Box sx={{ backgroundColor: "", width: { md: "35%", xs: "100%" }, m: "auto", height: "80px", height: "30px", my: "25px", display: "flex", justifyContent: "space-around" }}>
                    <Typography sx={{ fontSize: { md: "18pt", xs: "16pt" } }}>&copy; {currYear.getFullYear()} &gt;:) </Typography>
                    {/* {currYear.getFullYear()} {t('common:footer.text')} */}
                </Box>
                <Box sx={{ backgroundColor: "", width: { md: "10%", xs: "100%" }, m: "auto", height: "30px", my: "25px", display: "flex", justifyContent: "space-around" }}>
                    {
                        router.locales.map((locale, key) => {
                            return (
                                <Box sx={{ minWidth: "40px", minHeight: "40px", maxWidth: "40px", maxHeight: "40px", borderRight:"2px solid grey", borderBottom:"2px solid grey" }} key={key}>
                                    <Link href={router.asPath} locale={locale}><a><Flag locale={locale} /></a></Link>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}