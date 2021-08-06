import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';
import PlayerForm from './PlayerForm';
const AddPlayer = () => {
    const [player, setPlayer] = useState([]);

    const [errors, setErrors] = useState([]);

    const createPlayer = newPlayer => {
        axios.post('http://localhost:8000/api/player', newPlayer)
            .then(res=>{
                setPlayer([...player, res.data]);
                navigate('/')
            }).catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  
        }

    return (
        <>
        <div>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <PlayerForm 
            onSubmitProp={createPlayer}
            />
        </div>
        </>
    )
}

export default AddPlayer

