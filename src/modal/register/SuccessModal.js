import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SuccessModal = ({ type ,suffix , show, setShow }) => {

    const handleClose = () => {
        setShow(false);
        if(type === 'comment'){
            window.location.reload();
            return;
        }
        window.history.back();
    }

    return (
        <Modal show = {show}>
            <Modal.Body>
                <p>성공적으로 {suffix}되었습니다.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="primary" 
                    onClick = {handleClose} >
                        닫기
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessModal;