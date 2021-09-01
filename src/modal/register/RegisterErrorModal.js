import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const RegisterSuccessModal = ({ msg, show , setShow}) => {
    return (
        <Modal show = {show} >
            <Modal.Body>
                <p>Error : {msg}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="primary" 
                    onClick = {() => setShow(false)} >
                        닫기
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterSuccessModal;