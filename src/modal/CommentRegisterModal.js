import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CommentRegisterModal.css';

function CommentRegisterModal({ type , id}){
    const [show , setShow] = useState(false);
    const [form , setForm ] = useState({writer : '', content: '', password: ''});

    const handleClose = () => {
        setForm({
            writer: '', content: '', password: '' });
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value,
        })
    }
    const handleSubmit = (e) => {
        if(!form.writer || !form.content || !form.password){
            alert("모두 입력해주세요!");
            return ;
        } 
        e.preventDefault();
        postToServer();
        alert('등록 중 입니다....');
    }

    const postToServer = async () => {
        try {
            const url = "/comment/api/v1/"+ type +"/" + id + "/register";
            const response = await axios.post(url, form);
            const isSuccess = response.data['isSuccess'];
            if(isSuccess){
                alert('댓글이 성공적으로 등록됐습니다.');
            } else {
                alert('문제가 발생했습니다.');
            }
        } catch(e){
            alert("Error : " + e);
        }

        setShow(false);
        window.location.reload();
    }

    return (
        <>
            <Button 
                variant = 'primary' 
                onClick = {handleShow}>
                댓글 등록
            </Button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>댓글 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body className = "register-modal-body" onChange= {handleChange}>
                    <input type="text" name="writer" placeholder="작성자" className ="register-modal-input"  />
                    <input type="content" name="content" placeholder="내용" className ="register-modal-input" />
                    <input type="password" name="password" placeholder ="비밀번호" className ="register-modal-input" />
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleClose}>
                        닫기
                    </Button>
                    <Button variant = 'primary' onClick = {handleSubmit}>
                        등록
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CommentRegisterModal;