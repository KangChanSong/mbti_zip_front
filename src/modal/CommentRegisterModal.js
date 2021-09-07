import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CommentRegisterModal.css';

const RegisterModal = ({show, handleChange, handleClose, handleSubmit}) => (
    <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>댓글 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body className = "register-modal-body" onChange= {handleChange}>
            <input type="text" name="writer" placeholder="작성자" className ="register-modal-input"  />
            <input type="content" name="content" placeholder="내용" className ="register-modal-input" />
            <input type="password" name="password" placeholder ="비밀번호" className ="register-modal-input" />
        </Modal.Body>
        
        <Modal.Footer>
            <Button variant = "secondary" onClick = {handleClose}>
                닫기
            </Button>
            <Button variant = 'primary' onClick = {handleSubmit}>
                등록
            </Button>
        </Modal.Footer>
    </Modal>
)
const WaitModal = ({ wait }) => {
    return (
        <Modal show = {wait} >
            <Modal.Body>
                등록중 입니다...
            </Modal.Body>
        </Modal>
    )
}

const DoneModal = ({ done, setDone, setPage}) => {

    const onClick = () => {
        
        setPage("1");
        setDone(false);
    }

    return (
        <Modal show = {done} >
            <Modal.Body>
                댓글이 성공적으로 등록됐습니다.
            </Modal.Body>
            <Button onClick = {onClick}>
                닫기
            </Button>
        </Modal>
    )
} 

function CommentRegisterModal({ type , id, setPage }){
    const [show , setShow] = useState(false);
    const [form , setForm ] = useState({writer : '', content: '', password: ''});

    const [wait, setWait] = useState(false);
    const [done, setDone] = useState(false);

    const handleClose = () => {
        setForm({
            writer: '', content: '', password: '' });
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value,
        })
    }
    const handleSubmit = (e) => {
        if(!form.writer || !form.content || !form.password){
            alert("모두 입력해주세요!");
            return ;
        } 
        e.preventDefault();
        postToServer();
        setWait(true);
    }

    const postToServer = async () => {

        try {
            const url = "/comment/api/v1/"+ type +"/" + id + "/register";

            setShow(false);
            const response = await axios.post(url, form);
            const isSuccess = response.data['isSuccess'];
            if(isSuccess){
                setWait(false);
                setDone(true);
            } else {
                alert('문제가 발생했습니다.');
            }
        } catch(e){
            alert("Error : " + e);
        }
    }

    return (
        <>
            <Button 
                variant = 'primary' 
                onClick = {handleShow}>
                댓글 등록
            </Button>

            <RegisterModal
                show = {show}
                handleChange = {handleChange}
                handleClose = {handleClose}
                handleSubmit = {handleSubmit}
            />            

            <WaitModal
                wait = {wait}
            />

            <DoneModal
                done = {done}
                setDone = {setDone}
                setPage = {setPage}
            />
        </>
    )
}


export default CommentRegisterModal;