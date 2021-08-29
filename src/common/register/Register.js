import React, { useState } from 'react';

import changeTypeToKorean from '../TypeChanger';
import PersonRegisterForm from '../../person/register/PersonRegisterForm'
import JobRegisterForm from '../../job/register/JobRegisterForm';
import RegisterSuccessModal from '../../modal/register/RegisterSuccessModal';
import RegisterLoadingModal from '../../modal/register/RegsiterLoadingModal';
import RegisterErrorModal from '../../modal/register/RegisterErrorModal';
import { postOne } from '../../modules/apiCaller';

import './Register.css';


// type : person 또는 job
function Register({ match }){
    const type = match.params.type;
    let initialState;

    if(type === 'person'){
        initialState =
            {
                name : '',
                writer : '',
                gender : '',
                categoryIds : '',
                description : '',
                password : '',
            };
    } 
    if(type === 'job'){
        initialState = 
            {
                title : '',
                writer : '',
                password : '',
            };
    } else {
        throw new Error('type 이 맞지 않습니다. type : ' + type);
    }

    const [form, setForm] = useState(initialState);

    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [show, setShow ] = useState(false);

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setForm({
            ...form,
            [name] : value,
        });
    };

    const handleSubmit = (e) => {

        const displayAlert = () => alert('모두 입력해주세요.');

        if(type === 'person'){
            if(!form.name || !form.writer || !form.gender || !form.categoryIds || !form.description || !form.password){
                displayAlert();
            }
        }
        if(type === 'job'){
            if(!form.title || !form.writer || !form.password){
                displayAlert();
            }
        }
        e.preventDefault();
        const url = "/" + type +"/api/v1/register";
        postOne(url, form, setSuccess, setError, setLoading);
    }

    return (
        <>
        {type === 'person' ?

            <PersonRegisterForm 
            setForm = {setForm}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}/> 
            : 
            <JobRegisterForm
            setForm = {setForm}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}/>};

        {success !== true ? 
            null
            :
            <RegisterSuccessModal
                show = {show.toString()}
                setShow = {setShow}
            />
            }
        
        {loading !== true ?
            null
            : 
            <RegisterLoadingModal
                show = {loading.toString()}/> }

        {!error ? 
            null
            :
            <RegisterErrorModal 
                error = {error} /> }
        </>
    );
        
}

export default Register;