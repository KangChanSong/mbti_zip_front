import React, { useState } from 'react';
import PersonRegisterForm from '../../person/register/PersonRegisterForm'
import JobRegisterForm from '../../job/register/JobRegisterForm';
import SuccessModal from '../../modal/register/SuccessModal';
import LoadingModal from '../../modal/register/LoadingModal';
import ErrorModal from '../../modal/register/ErrorModal';
import FillAllModal from '../../modal/warning/FillAllModal';
import { postOne } from '../../modules/apiCaller';

import './Register.css';

const getInitialState = (type) => {


    let initialState;
    
    if(type == 'person'){
        initialState =
            {
                name : '',
                writer : '',
                gender : '',
                categoryId : '',
                description : '',
                password : '',  
                filename : '',
            };
    } else if(type == 'job'){
        initialState = 
            {
                title : '',
                writer : '',
                password : '',
                filename : '',
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
            if(!form.name || !form.writer || !form.gender || !form.categoryId || !form.description || !form.password || !form.filename){
                setNotFilled(true);
                return ;
            }
        }
        if(type === 'job'){
            if(!form.title || !form.writer || !form.password || !form.filename){
                setNotFilled(true);
                return ;
            }
        }
        const url = "/api/v1/" + type +"/register";
        postOne(url, form, setSuccess, setError, setLoading);
    }
        
    return (
        <>
        {type === 'person' ?

            <PersonRegisterForm 
            form = {form}
            setForm = {setForm}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}/> 
            : 
            <JobRegisterForm
            form = {form}
            setForm = {setForm}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}/>}

        <SuccessModal
                suffix = '등록'
                show = {success}
                setShow = {setSuccess}/>
         
        <LoadingModal
            suffix = '등록'
            show = {loading}/>

        <ErrorModal 
            msg = {error}
            show = {error}
            setShow = {setError} /> 

        <FillAllModal 
            show = {notFilled}
            setShow = {setNotFilled}/>
            
        </>
    );
        
}
export default React.memo(Register);