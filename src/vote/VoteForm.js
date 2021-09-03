import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchItems, fetchVotes } from '../modules/apiCaller';
import { ContextConsumer } from '../context/ContextContainer';
import Modal from 'react-bootstrap/Modal';
import './Vote.css';
import axios from 'axios';

const VoteCheckModal = ({ show, setShow,  handleVote}) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <Modal show = {show}>
            <Modal.Body>
                <p>한번 투표하면 취소할 수 없습니다. <br />
                   그래도 투표하시겠어요?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {handleClose}>닫기</Button>
                <Button variant="primary" onClick = {handleVote}>투표</Button>
            </Modal.Footer>
        </Modal>
    )
}

const VoteFormElement = ({ type, id, isRendered, value , setValue }) => {
    // mbti 조회
    const [mbtis , setMbtis] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null); 

    // mbti 투표
    const [selectedMbti, setSelectedMbti] = useState(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const url = "/mbti/api/v1/list";
        if(isRendered){
            alert("VoteForm.js useEffect()")
            fetchItems(url, 'mbti', setMbtis, setError, setLoading);
            fetchVotes(type, id, setValue);
        }
    }, [])

    // state 별 렌더링
    const createMbtiOptions = (mbtis) => {
        if(loading || !mbtis) return (<option>불러오는 중</option>)
        if(error) return (<option>ERROR : {error}</option>)
        return mbtis.map(mbti => {
            let name = mbti['name'];
            return (
                <option key = {mbti.id} value={mbti.id}>
                    {name.toUpperCase()}
                </option>
            )
        })
    }

    // select 에서 mbti 선택시 처리
    const handleChange = (e) => setSelectedMbti(e.target.value);

    // 투표하기 버튼처리
    const handleVote = async () => {

        if(!selectedMbti){
            alert("MBTI를 선택해주세요.")
            return;
        }

        try{
            const url = "/vote/api/v1/mbti/" + selectedMbti + "/" + type + "/" + id;
            await axios.post(url);
            fetchVotes(type, id,  setValue);
            alert("투표 성공")
            setShow(false);
        } catch(error){
            alert('Error : ' + error);
        }

    }

    return (
        <>
        <div className = "vote-form" >
        <Form>
            <Form.Select 
                className = "vote-form-select"
                onChange = {handleChange}>
                <option>MBTI를 고르세요.</option>
                {createMbtiOptions(mbtis)}
            </Form.Select>
            { value.available ? 
            <Button 
                variant = "primary" 
                className = "vote-form-button"
                onClick = {() => setShow(true)}>
                투표하기
            </Button> :
            <Button 
                variant = "dark"
                className = "vote-form-button"
                disabled>
                이미 투표함
            </Button>  }           
        </Form>
        </div>
        <VoteCheckModal
        show = {show}
        setShow = {setShow}
        handleVote = {handleVote}
    />
    </>
    );
}

const VoteForm = ({ type , id, isRendered}) => (
    <ContextConsumer >
        {
            ({ state, actions}) => (
                <VoteFormElement
                    type = {type}
                    id = {id}
                    isRendered = {isRendered}
                    value = {state.value}
                    setValue=  {actions.setValue}
                />
            )
        }
    </ContextConsumer>
)

export default React.memo(VoteForm);