import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

const SuccessModal = ({ type ,suffix , show, setShow }) => {

    const history = useHistory();

    const handleClose = () => {
        setShow(false);
        if(type === 'comment'){
            history.go(0);
            return;
        }
        history.goBack();
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