import React,{useState} from 'react'

const Pkemon = () => {
    const [pokemon,setPokemon]=useState([]);
    


        const onClickHandler=()=>{
            fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(result=>{
                return(result.json());
            }).then(res=>{
                setPokemon(res.results)
            }).catch(err=>{
                console.log(err)
            })
        }

    return (
        <div>
            <button onClick={onClickHandler} >fetch pkemon</button>
            <ul>
                {pokemon.map((item,i)=>{
                    const {name}=item;
                    return(<li key={i}>{name}</li>)})}
            </ul>


        </div>
    )

    }
export default Pkemon
