import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const Update= (props) => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discription, setDiscription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDiscription(res.data.discription);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            discription
        })
            .then(res => console.log(res));
            navigate(`/product/${id}`)
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="discription"
                    value={discription} 
                    onChange={(e) => { setDiscription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;