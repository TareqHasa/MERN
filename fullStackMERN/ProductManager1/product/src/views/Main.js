import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
const Main= () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
                console.log(loaded);
            });
    },[product])

    const removeFromDom = (productId) => {
        setProduct(product.filter(product => product._id !== productId));
    }
    const createProduct = products => {
        axios.post('http://localhost:8000/api/product', products)
            .then(res=>{
                setProduct([...product, res.data]);
            })
            
    }
    return (
        <>
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDiscription=""/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
        </>
    )
}
export default Main;