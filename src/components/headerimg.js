import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/system';

export default function Headerimg(props) {
    if (props.display) {
        return (
            <Box sx={{ backgroundImage: `url(${props.src})`, width: props.width, height: props.height, backgroundColor: "grey", backgroundSize: "100% 100%" }}>

            </Box>
            // <Image layout="responsive" src={props.src} width={1920} height={250} alt={props.alt} />
            )
    } else {
        return
    }
}
