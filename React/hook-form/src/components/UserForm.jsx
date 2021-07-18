import React,{useState} from 'react'

const UserForm=(props)=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 

const crateUser=(e)=>{
    e.preventDefault();
    const newUser = { firstName,lastName, email, password,confirmPassword };
    console.log("Welcome", newUser);
}
    return (
        <>
        <form onSubmit={crateUser}>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
        </form>
        <div>
            <h3>Your Form Data</h3>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmPassword}</p>
        </div>
        </>    
        )
};

export default UserForm

