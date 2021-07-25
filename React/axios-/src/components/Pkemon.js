import React, { useState } from 'react'
import axios from 'axios'

const Pkemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(result =>setPokemon(result.data.results)) 
        }

    return (
        <div>
            <button onClick={onClickHandler} >fetch pkemon</button>
            <ul>
                {pokemon.map((item, i) => {
                    const { name } = item;
                    return (<li key={i}>{name}</li>)
                })}
            </ul>


        </div>
    )

    }
export default Pkemon
