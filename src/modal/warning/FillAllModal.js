import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FillAllModal = ({ show, setShow}) => (
    <Modal show = {show}>
        <Modal.Body>모두 입력해주세요!</Modal.Body>
        <Modal.Footer>
            <Button variant = "primary" onClick = {() => setShow(false)}>닫기</Button>
        </Modal.Footer>
    </Modal>
)

export default FillAllModal;