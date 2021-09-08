import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import SuccessModal from './register/SuccessModal';
import ErrorModal from './register/ErrorModal';
import LoadingModal from './register/LoadingModal';
import './DeleteModal.css';

const DeleteModal = ({ type , size, text, id }) => {
    const [show , setShow] = useState(false);
    const [form , setForm ] = useState({ password : ''});

    const [done ,setDone ] = useState(false);
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({
             ...form,
            password : e.target.value});
    }

    const handleClose = () => {
        setShow(false);
        
    }
    const handleShow = () => {
        setShow(true);
        setForm({ password : ''});
    }

    const handleDelete = () => {
        if(!form.password || form.password ===''){
            alert("비밀번호를 입력해주세요.");
            return;
        }
        requestDelete();
    }

    const requestDelete = async () => {
        try {

            setDone(false);
            setError(null);
            setLoading(false);

            const url = "/" + type + "/api/v1/delete/" + id;
            const response = await axios.delete(url, { data : form });
            const isSuccess = response.data['isSuccess'];
            if(isSuccess){
                setDone(true);
            } else {
                alert("비밀번호가 맞지 않습니다.");
            }
        } catch (e){
            setError(e);
        }

        setLoading(false);
    }

    return (
        <>
            <Button 
                size= {size}
                variant = "secondary"
                onClick = {handleShow}>
                {text}
            </Button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body className = "delete-modal-body" >
                    <label className = "delete-modal-password-text">비밀번호를 입력하세요.</label><br />
                    <input type="password" name="password" className ="delete-modal-password-input" onChange = {handleChange}/>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleClose}>
                        닫기
                    </Button>
                    <Button variant = 'primary' onClick = {handleDelete}>
                        삭제
                    </Button>
                </Modal.Footer>
            </Modal>

            <SuccessModal show = {done} setShow = {setDone} suffix = '삭제'/>
            <LoadingModal show = {loading} suffix = "삭제" />
            <ErrorModal msg = {error} show = {error} setShow = {setError}/>

        </>
    )
}

export default DeleteModal;