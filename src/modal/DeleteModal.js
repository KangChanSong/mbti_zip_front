import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeleteModal.css';

function DeleteModal(props){
    const [show , setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button 
                variant = {props.variant} 
                size= {props.size}
                onClick = {handleShow}>
                {props.text}
            </Button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body className = "delete-modal-body">
                    <label className = "delete-modal-password-text">비밀번호를 입력하세요.</label><br />
                    <input type="password" name="password" className ="delete-modal-password-input" />
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleClose}>
                        닫기
                    </Button>
                    <Button variant = 'primary' onClick = {handleClose}>
                        삭제
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal;