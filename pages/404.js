import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Link from "next/link";
import { LayoutOne } from './template/LayoutOne';

Custom404.Pagetitle = "404 | Website"
Custom404.Layout = LayoutOne

export default function Custom404() {
  return (
    <Box sx={{height:"55.3vh", width:"100%"}}>
        <Typography variant="h2" sx={{textAlign:"center", pt:"8rem"}}>Error 404</Typography>
          <Typography sx={{ textAlign: "center" }} variant="h3">Back to <Link href="/">Home</Link></Typography>
    </Box>
  )
} 
