import { Link } from '@reach/router';
import React from 'react'
const ProductList=(props) => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return( <p key={idx}><Link to={`/product/${product._id}`}>{product.title}, {product.price},{product.discription}</Link></p>
            )})}
        </div>
    )
}

export default ProductList;