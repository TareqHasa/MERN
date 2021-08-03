import React, { useState } from 'react'
import ApiWalker from './ApiWalker'

const Display = () => {
    const [inf,setInf]=useState("");
    const displayFromApi =(responding)=>{
        setInf(responding);
    }
    return (
        <div>
            <ApiWalker displayFromApi={displayFromApi} />
            
        </div>
    )
}

export default Display
