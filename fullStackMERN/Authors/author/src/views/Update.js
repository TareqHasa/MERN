import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import AuthorForm from "../components/AuthorForm";

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    console.log(id)
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res =>{ console.log(res)
                navigate("/");
            }).catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
        
    }
    return (
        <div>
            <h4>Edit this Author</h4>
            {loaded && (
                <>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                    <ActionButton action="Cancel" authorId={author._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}

export default Update;