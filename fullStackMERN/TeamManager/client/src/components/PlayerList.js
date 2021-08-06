import React, { useState, useEffect } from 'react'
import axios from "axios"
import '../style/Table.module.css'
import ListHeader from './ListHeader';
import DeleteButton from './DeleteButton';
const PlayerList = (props) => {
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => {
                setPlayer(res.data);
                
                console.log(res.data);
            });
    }, [])

    const removeFromDom = (playerId) => {
        setPlayer(player.filter(playerz => playerz._id !== playerId))
    }



    return (
        <div>
            <ListHeader />
            <table>
                <tbody>
                    <tr>
                        <td><h2>Players</h2></td>
                        <td><h2>Preferred Position</h2></td>
                        <td><h2>Actions</h2></td>
                    </tr>
                    {player.map((players, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{players.name}</td>
                                <td>{players.position}</td>
                                <td><DeleteButton playerId={players._id} successCallback={()=>removeFromDom(players._id)} /></td>
                                {console.log(players._id)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList
