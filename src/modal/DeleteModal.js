import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './DeleteModal.css';

const DeleteModal = ({ variant, size, text, id }) => {
    const [show , setShow] = useState(false);
    const [form , setForm ] = useState({ password : ''});

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
            alert("비밀번호를 입력해주세요!");
            return;
        }
        requestDelete();
        alert("댓글 삭제중...");
    }

    const requestDelete = async () => {
        try {
            const url = "/comment/api/v1/delete/" + id;
            const response = await axios.delete(url, { data : form });
            const isSuccess = response.data['isSuccess'];
            if(isSuccess){
                alert('댓글이 성공적으로 삭제되었습니다.');
                window.location.reload();
            } else {
                alert("비밀번호가 맞지 않습니다.");
            }
        } catch (e){
            alert("Error : " + e);
            window.location.reload();
        }
    }

    return (
        <>
            <Button 
                variant = {variant} 
                size= {size}
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
        </>
    )
}

export default DeleteModal;