import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const RegisterSuccessModal = ({ error}) => {
    const [show , setShow ] = useState(true);
    return (
        <Modal.Dialog show = {true} >
            <Modal.Body>
                <p>Error : {error}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="primary" 
                    onClick = {() => setShow(false)} >
                        닫기
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default RegisterSuccessModal;