import React, { useState } from 'react'
const ProductForm =(props) => {
    const { initialTitle, initialPrice,initialDiscription, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [discription,setDiscription]=useState(initialDiscription);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({title,price,discription});
        setTitle("");
        setPrice("");
        setDiscription("");
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDiscription(e.target.value)} value={discription}/>
            </p>

            <input type="submit"/>
        </form>
    )
}

export default ProductForm;