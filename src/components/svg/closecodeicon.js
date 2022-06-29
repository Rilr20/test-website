import React from 'react'
ClosingCodeIcon.defaultProps = {
  width: "24px",
  height: "24px",
}
export default function ClosingCodeIcon(props) {
  return (
      <svg width={props.width} height={props.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#000" strokeWidth="2" d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7" />
      </svg>
  )
}
