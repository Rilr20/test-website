import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/system';

export default function Headerimg(props) {
    console.log(props.src);
    if (props.display) {
        return (
            <Box sx={{ backgroundImage: `url(${props.src})`, width: props.width, height:{ md: props.height + "px", sm: props.height / 2 +"px", xs: props.height / 3 + "px"}, backgroundColor: "grey", backgroundSize: "100% 100%" }}>

            </Box>
            // <Image layout="responsive" src={props.src} width={1920} height={250} alt={props.alt} />
            )
    } else {
        return
    }
}
