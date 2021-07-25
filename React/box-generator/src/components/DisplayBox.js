import React from 'react'
import Box from './Box'

const DisplayBox = (props) => {
    const colors = props.color;
    return (
        <div>
            {colors.map((color, i) =>
                <Box key={i} newColor={color} />
            )}
        </div>
    )
}

export default DisplayBox
