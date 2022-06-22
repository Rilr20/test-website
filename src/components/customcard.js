import { Box } from '@mui/material'
import React from 'react'

Customcard.defaultProps = {
    top: "30px",
    smallWidth:"300px",
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
        <Box className="card-shadow" sx={{ backgroundColor: theme => `${theme.palette.secondary.superlight}`, width: {md:props.width, xs:props.smallWidth}, height: props.height, position: "relative", borderTopLeftRadius: "10px", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px", borderTopRightRadius: "10px", m: "auto", mt: 2, }}>
            <Box sx={{ backgroundColor: theme => `${theme.palette.primary.superlight}`, width: {md:props.width, xs:props.smallWidth}, height: top, position: "absolute", bottom: 0, textAlign: "center", borderRadius: "8px 8px 4px 4px" }}>
                {props.children}
            </Box>
        </Box>
    )
}
