import React from 'react';
import Modal from 'react-bootstrap/Modal';

const RegisterLoadingModal = ({ show }) => {

    return (
        <Modal.Dialog show = {show} >
            <Modal.Body>
                <p>등록중...</p>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default RegisterLoadingModal;