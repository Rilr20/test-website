import { Box } from '@mui/material'
import React from 'react'

Customcard.defaultProps = {
    top:"30px",
}

export default function Customcard(props) {
    function getTopValue(height, top) {
        let strippedHeight = height.split("px")
        let strippedTop = top.split("px")
        let topValue = parseInt(strippedHeight[0] - strippedTop[0])
        
        return topValue
    }
    let top = getTopValue(props.height, props.top)
    return (
        <Box sx={{ backgroundColor: theme => `${theme.palette.secondary.superlight}`, width: props.width, height: props.height, position: "relative", borderTopLeftRadius: "10px", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px", borderTopRightRadius: "10px", m: "auto", mt: 2, boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)" }}>
            <Box sx={{ backgroundColor: theme => `${theme.palette.primary.superlight}`, width: props.width, height: top, position: "absolute", bottom: 0, textAlign: "center", borderRadius: "8px 8px 4px 4px" }}>
                {props.children}
            </Box>
        </Box>
    )
}
