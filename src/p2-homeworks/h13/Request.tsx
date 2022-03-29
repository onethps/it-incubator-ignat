import React, {ChangeEvent, useState} from 'react';
import {RequestsAPI} from "./api";

const Request = () => {

    let [currentCheckBoxStatus, setCurrentCheckBoxStatus] = useState<boolean>(false)
    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')

    const CheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentCheckBoxStatus(e.currentTarget.checked)
    }

    const buttonHandler = () => {
        RequestsAPI.sendCheckBoxStatus(currentCheckBoxStatus).then(res => {
            console.log({...res})
            setSuccess(res.data.errorText)
            setError('')

        }).catch(error => {
            console.log({...error});
            console.log((error.response ? error.response.data.errorText : error.message))
            setError((error.response ? error.response.data.errorText : error.message))
            setSuccess('')
        })
    }


    return (
        <div>
            <button onClick={buttonHandler}>Change CheckBox Status</button>
            <input type={'checkbox'} onChange={CheckBoxHandler} checked={currentCheckBoxStatus}/>
            {success ? <div>{success}</div> : <div>{error}</div>}
        </div>
    );
};

export default Request;