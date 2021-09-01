import React from 'react';
import Modal from 'react-bootstrap/Modal';

const RegisterLoadingModal = ({ show }) => {

    return (
        <Modal show = {show} >
            <Modal.Body>
                <p>등록중...</p>
            </Modal.Body>
        </Modal>
    )
}

export default RegisterLoadingModal;