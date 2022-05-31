import { Box } from '@mui/material'
import React from 'react'

export default function Dice(props) {
  const pips = [];
  for (let i = 0; i < props.pips; i++) {
    pips[i] = i
  }
  return (
    <Box className='diceface' sx={{ height: "50px", width: "50px", backgroundColor:"#dedace", mt:"1.25em", mb:"0.25em"}}>
        {
          pips.map((item) => {
            return <div key={item} className="pip"></div>
          })
        }
    </Box>
  )
}
