import axios from 'axios';
import React from 'react'
import { Button } from '@material-ui/core';

const DeleteButton = (props) => {
    const { playerId, successCallback } = props;

    const deletePlayer=(e)=>{
    axios.delete('http://localhost:8000/api/player/' + playerId)
    .then(res => {
        successCallback(playerId);
    })
}
    return (
        <div>
            <Button onClick={deletePlayer}> Delete </Button>
        </div>
    )
}

export default DeleteButton
