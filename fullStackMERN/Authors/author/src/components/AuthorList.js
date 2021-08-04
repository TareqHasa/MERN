import { Link, navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ActionButton from './ActionButton';
const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data));
    }, [])
    return (
        <div>
            <Link to="/new">Add an author </Link>
            <h3>We have quotes by :</h3>
            {props.author.map((author, idx) => {
                return (
                    <>
                        <p key={idx}>{author.name}</p>
                        <ActionButton action="Delete" authortId={author._id} successCallback={() => navigate("/")} />
                        <ActionButton action="Update" authortId={author._id} />

                    </>
                )
            })}
        </div>
    )
}

export default AuthorList
