import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const Detail = ({ id }) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(request => setProduct(request.data))
        console.log(id)
        console.log(product)
    }, [product])

    return (
        <div>
            <Link to={"/product/"}>
                Products Page
            </Link>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.discription}</p>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;