import React, { useState } from 'react'
import axios from 'axios';

const ApiWalker = (props) => {
    const displayFromApi=props;
    const [responding, setResponding] = useState({});
    const [searchFor, setSearchFor] = useState('');
    const [id, SetId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("https://swapi.dev/api/" + searchFor + "/" + id)
            .then(response => {
                setResponding(response.data);
                displayFromApi(responding);
            })

    };
    // const handleSelect =(event)=>{
    //     searchFor(event.target.value)
    //     console.log(event.target.value)
    // };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="select" >Search for : </label>
                <select value={searchFor} onChange={(e) => { setSearchFor(e.target.value) }} >
                    <option value="people">people</option>
                    <option value="planets">planet</option>
                </select>
                <label htmlFor="id">ID : </label>
                <input type="number" id="id" value={id} onChange={(e) => SetId(e.target.value)} />
                <button type="submit" >click</button>

            </form>


        </>

    )
}

export default ApiWalker
