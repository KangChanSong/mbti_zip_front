import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CommentRegisterModal.css';

function CommentRegisterModal(){
    const [show , setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <Modal.Body className = "register-modal-body">
                    <input type="text" name="writer" placeholder="작성자" className ="register-modal-input"  />
                    <input type="content" name="content" placeholder="내용" className ="register-modal-input" />
                    <input type="password" name="password" placeholder ="비밀번호" className ="register-modal-input" />
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleClose}>
                        닫기
                    </Button>
                    <Button variant = 'primary' onClick = {handleClose}>
                        등록
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CommentRegisterModal;