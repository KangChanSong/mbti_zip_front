import React, { useState } from 'react';

import PersonRegisterForm from '../../person/register/PersonRegisterForm'
import JobRegisterForm from '../../job/register/JobRegisterForm';
import RegisterSuccessModal from '../../modal/register/RegisterSuccessModal';
import RegisterLoadingModal from '../../modal/register/RegsiterLoadingModal';
import RegisterErrorModal from '../../modal/register/RegisterErrorModal';
import FillAllModal from '../../modal/warning/FillAllModal';
import { postOne } from '../../modules/apiCaller';


import './Register.css';

const getInitialState = (type) => {

    let initialState;
    
    if(type === 'person'){
        initialState =
            {
                name : '',
                writer : '',
                gender : '',
                categoryId : '',
                description : '',
                password : '',  
                image : '',
            };
    } else if(type === 'job'){
        initialState = 
            {
                title : '',
                writer : '',
                password : '',
            };
    } else {
        throw new Error('type 이 맞지 않습니다. type : ' + type);
    }

    return initialState;
}

// type : person 또는 job
const Register = ({ match }) => {
    const type = match.params.type
    const [form, setForm] = useState(getInitialState(type));

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [notFilled, setNotFilled] = useState(false);

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(type === 'person'){
            if(!form.name || !form.writer || !form.gender || !form.categoryId || !form.description || !form.password || !form.image){
                setNotFilled(true);
                return ;
            }
        }
        if(type === 'job'){
            if(!form.title || !form.writer || !form.password){
                setNotFilled(true);
                return ;
            }
        }
        const url = "/" + type +"/api/v1/register";
        postOne(url, form, setSuccess, setError, setLoading);
    }

    return (
        <>
        {type === 'person' ?

            <PersonRegisterForm 
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}/> 
            : 
            <JobRegisterForm
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}/>}

        <RegisterSuccessModal
                show = {success}
                setShow = {setSuccess}/>
         
        <RegisterLoadingModal
            show = {loading}/>

        <RegisterErrorModal 
            msg = {error}
            show = {error}
            setShow = {setError} /> 

        <FillAllModal 
            show = {notFilled}
            setShow = {setNotFilled}/>
            
        </>
    );
        
}

export default Register;