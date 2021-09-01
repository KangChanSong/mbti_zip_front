import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchItems, fetchVotes } from '../modules/apiCaller';
import { ContextConsumer } from '../context/ContextContainer';
import './Vote.css';
import axios from 'axios';

const VoteFormElement = ({ type, id,  setValue }) => {

    // mbti 조회
    const [mbtis , setMbtis] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null); 

    // mbti 투표
    const [selectedMbti, setSelectedMbti] = useState(null);

    useEffect(() => {
        const url = "/mbti/api/v1/list";
        fetchItems(url, 'mbti', setMbtis, setError, setLoading);
    }, []);

    // state 별 렌더링
    const createMbtiOptions = (mbtis) => {

        if(loading || !mbtis){
            return (
                <option>
                    불러오는 중
                </option>
            )
        }

        if(error){
            return (
                <option>
                    ERROR : {error}
                </option>
            )
        }

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
    const handleChange = (e) => {
        setSelectedMbti(e.target.value);
    }

    // 투표하기 버튼처리
    const handleVote = async () => {
        try{
            const url = "/vote/api/v1/mbti/" + selectedMbti + "/" + type + "/" + id;
            await axios.post(url);
            fetchVotes(type, id, setValue, setError, setLoading);
        } catch(error){
            alert('Error : ' + error);
        }

    }

    return (
        <div className = "vote-form" >
        <Form>
            <Form.Select 
                className = "vote-form-select"
                onChange = {handleChange}>
                <option>MBTI를 고르세요.</option>
                {createMbtiOptions(mbtis)}
            </Form.Select>
            <Button 
                variant = "primary" 
                className = "vote-from-button"
                onClick = {handleVote}>
                투표하기
            </Button>
        </Form>
        </div>
    );
}

const VoteForm = ({ type , id}) => (
    <ContextConsumer >
        {
            ({ actions}) => (
                <VoteFormElement
                    type = {type}
                    id = {id}
                    setValue=  {actions.setValue}
                />
            )
        }
    </ContextConsumer>
)

export default VoteForm;