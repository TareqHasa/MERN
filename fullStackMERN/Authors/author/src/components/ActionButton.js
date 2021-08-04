import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'

const ActionButton = (props) => {

    const { authortId, successCallback, action } = props;
    const handleAction = e => {
        if (action === "Delete") {
            axios.delete('http://localhost:8000/api/author/' + authortId)
                .then(res => {
                    successCallback();
                })
        }
        if (action === "Cancel") {

            successCallback();

        }
        if (action === "Update") {
            navigate(`/edit/${authortId}`)
        }
        
    }
    return (
        <button onClick={handleAction}>
            {action}
        </button>
    )
}

export default ActionButton
