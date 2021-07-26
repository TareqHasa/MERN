import React from 'react'

const Hello = (props) => {
    const {val,color,background}=props;

    const valHandler=(val)=>{
        if(isNaN(val)){
            let cont="the word is :";
            return cont;
        }else{
            let cont="the number is :"
            return cont;
        }

    };
    
    return (
        <div>
            <h1 style={{color:color ,background :background}}>{valHandler(val)} {val}</h1>
        </div>
    )
}

export default Hello
