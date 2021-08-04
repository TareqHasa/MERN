import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import ActionButton from './ActionButton';
import { Link, navigate } from '@reach/router';

const AddAuthor = () => {
    const [authors, setAuthor] = useState([]);

    const [errors, setErrors] = useState([]);
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res=>{
                setAuthor([...authors, res.data]);
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
        <div>
            <h3><Link to="/">Home</Link></h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h4>Add a new author:</h4>
            <AuthorForm onSubmitProp={createAuthor} initialName="" />
            <ActionButton action="Cancel"  successCallback={() => navigate("/")}/>
        </div>
    )
}


export default AddAuthor
