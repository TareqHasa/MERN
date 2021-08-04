import { navigate } from '@reach/router';
import React, { useState } from 'react'
import ActionButton from './ActionButton';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(initialName); 
    const onSubmitHandler = (e)=> {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name});
        setName("");

    }
    return (
        <div>
                    <form onSubmit={onSubmitHandler}>
                        
            <p>
                
                <label>Name :</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>

            <input type="submit"/>
            
        </form>
        
        </div>
    )
}

export default AuthorForm
