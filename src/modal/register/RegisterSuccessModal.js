import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RegisterSuccessModal = ({ show, setShow }) => {

    return (
        <Modal show = {show}>
            <Modal.Body>
                <p>성공적으로 등록되었습니다.</p>
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