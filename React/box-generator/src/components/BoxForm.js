import React, { useState } from 'react'

const BoxForm = (props) => {
    let colors=[];
    const [color, setColor] = useState("");
    const createBox = (e) => {
        e.preventDefault();
        colors.push(color);
        props.onNewColor(color);
        setColor("");
    }

    const onChangeColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <div>
            <form onSubmit={createBox}>
            <label htmlFor="color">Color: </label>
            <input
            type="text"
            name="color"
            onChange = {onChangeColor}
            value = {color}
            />
            <input type="submit" value="Add Box!"/>
        </form>
        </div>
    )
}

export default BoxForm
