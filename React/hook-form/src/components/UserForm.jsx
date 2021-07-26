import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const crateUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 4) {
            setFirstNameError("First Name must be mor than 3 char");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setlastNameError("Last Name is required!");
        } else if (e.target.value.length < 3) {
            setlastNameError("Last Name must be mor than 3 char");
        } else {
            setlastNameError("");
        }
    }
    const handleLEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 3) {
            setEmailError("Email must be mor than 3 char");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be mor than 8 char");
        } else {
            setPasswordError("");
        }
    }

    const handlePasswordConfirme = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Password must match!");
        } else {
            setConfirmPasswordError("");
        }
    }
    return (
        <>
            <form onSubmit={crateUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {
                        firstNameError ?
                            <p style={{ color: 'red' }}>{firstNameError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {
                        lastNameError ?
                            <p style={{ color: 'red' }}>{lastNameError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleLEmail} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handlePasswordConfirme} />
                    {
                        confirmPasswordError ?
                            <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                            ""
                    }
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

