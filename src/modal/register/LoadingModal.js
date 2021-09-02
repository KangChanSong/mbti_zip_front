import React from 'react';
import Modal from 'react-bootstrap/Modal';

const RegisterLoadingModal = ({suffix, show }) => {

    return (
        <Modal show = {show} >
            <Modal.Body>
                <p>{suffix}중...</p>
            </Modal.Body>
        </Modal>
    )
}

export default RegisterLoadingModal;