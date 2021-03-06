import React, { useEffect, useState } from 'react';
import changeTypeToKorean from '../TypeChanger';
import Alert from 'react-bootstrap/Alert';
import VoteForm from '../../vote/VoteForm';
import DeleteModal from '../../modal/DeleteModal';
import './GetHead.css';
import axios from 'axios';
import { renderAfterApiCall } from '../../modules/renderHelper';

const PersonHead = ({ item }) => (
    <Alert variant = "light" className = "get-alert" >
        <div className = "get-img">
        <img src = {"/api/v1/file/get/" + item.filename} />
        </div>
        <div className = "get-text">
            <p>작성자 : {item.writer}</p>
            <p>분류 : {item.category}</p>
            <p>설명 : {item.description}</p>
            <p>투표 결과 : {item.mbti}</p>
        </div>
    </Alert> );

const JobHead = ({ item }) => (
    <Alert variant = "light" size = "lg" className = "get-alert">
        <img className = "get-img" src = {"/api/v1/file/get/" + item.filename} />
        <div className = "get-text">
            <p>작성자 : {item.writer}</p>
            <p>투표 결과 : {item.mbti}</p>
        </div>
    </Alert> 
);



// item : Job 또는 Person 객체
// type : job 또는 person
const GetHead = ({item, type}) => {

    const [likes , setLikes] = useState(item.likes);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [available, setAvailable] = useState(null);
    const [isRendered, setIsRendered] = useState(false);

    const postToServer = async () => {
        try {
            setIsRendered(false);
            setLikes(item.likes);
            setAvailable(null);
            setError(null);
            setLoading(true);

            const url = "/api/v1/like/get/" + type + "/" + item.id;
            const response = await axios.get(url);

            const likes = response.data['likes'];
            const available = response.data['available'];
        
            setLikes(likes);
            setAvailable(available);

        } catch(e){
            setError(e);
        }
        setLoading(false);
        setIsRendered(true);
    }

    useEffect(() => {
        postToServer();
    }, []);

    const handleLike = async () => {
        if(available){
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }

        setAvailable(!available);
        const url = "/api/v1/like/" + type + "/" + item.id;
        await axios.post(url);
        
    }

    const buttons = (<div className = "get-head-buttons">
                        <p>조회수: {item.views}</p>
                        <button onClick = {handleLike}>{ available ? '🤍' : '❤'} {likes}</button>
                        <DeleteModal 
                            type = {type}
                            text = "삭제"
                            size = "sm"
                            id = {item.id}
                            />
                    </div>);

    const Element = ({ buttons } ) => (
        <div className = "get-head">
            <div className = "get-head-top">
                <h2>{changeTypeToKorean(type)} | {type === 'person' ? item.name : item.title}</h2>
                {buttons}
            </div>
            <div className = "get-head-bottom">
                {type === 'person' ? 
                <PersonHead item = {item} /> :
                <JobHead item = {item} />}
                <VoteForm 
                isRendered = {isRendered}
                type = {type}
                id = {item.id}/>
            </div>
        </div>
    )

    return renderAfterApiCall(item, error, loading , <Element buttons = {buttons} />)
}


export default React.memo(GetHead);