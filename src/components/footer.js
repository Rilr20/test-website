import { Box, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function Footer() {
    let router = useRouter()
    console.log(router);
    return (
        <Box sx={{ color: "text.primary" }}>
            <Divider sx={{width:"95%", m:"auto", my:2, borderColor:"primary.superdark" }} />
            <div>Link to stuff or something idk</div>
            <div>&copy; 2022 &gt;:)</div>
            <div>skapad av mich</div>
            {
                router.locales.map((local, key) => {
                    return <Typography key={key}>{local}</Typography>
                })
            }
        </Box>
    )
}
