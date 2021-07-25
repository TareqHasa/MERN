import React from 'react'

const Box = (props) => {
    const boxStyle = {
        height: '100px',
        width: '100px',
        background: props.newColor,
        display: 'inline-block',
        margin: '10px',
        border: '1px solid white',
    }
    return (
        <div style={boxStyle}>
        </div>
    )
}

export default Box
