import React, { useState } from 'react';
import changeTypeToKorean from '../TypeChanger';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import VoteForm from '../../vote/VoteForm';
import DeleteModal from '../../modal/DeleteModal';
import './GetHead.css';
import axios from 'axios';

// item : Job 또는 Person 리스트
// type : job 또는 person
const GetHead = ({item, type}) => {

    const [likes , setLikes] = useState(item.likes);
    const [toggle, setToggle] = useState(false);

    const toPersonHead = (item) => {
        
        return (
            <Alert variant = "light" className = "person-get-alert" >
                <Image className ="person-get-img" src="https://media.comicbook.com/2020/12/naruto-1249229.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart/" thumbnail />
                <div className = "person-get-text">
                    <p>작성자 : {item.writer}</p>
                    <p>분류 : {item.category}</p>
                    <p>투표 결과 : {item.mbti}</p>
                </div>
            </Alert>  
        )
    }

    const toJobHead = (item) => {
        return (
            <Alert variant = "light" size = "lg" className = "job-get-alert">
                <p>작성자 : {item.writer}</p>
                <p>투표 결과 : {item.mbti}</p>
            </Alert>            
        )
    }

    const handleLike = () => {

        const baseUrl = "/like/api/v1/";

        try {
            if(!toggle){
                let url = baseUrl + "add/" + type + "/" + item.id;
                axios.post(url);
                setLikes(likes + 1);   
            } else {
                let url = baseUrl + "cancel/" + type + "/" + item.id;
                axios.post(url);
                setLikes(likes - 1);   
            } 
            setToggle(!toggle);
            }
        catch (e){
            alert(e);
        }
    }

    return (
        <div className = "get-head">
            <div className = "get-head-top">
                <h2>{changeTypeToKorean(type)} | {type === 'person' ? item.name : item.title}</h2>
                <div className = "get-head-buttons">
                    <p>조회수: {item.views}</p>
                    <button onClick = {handleLike}>❤  {likes}</button>
                    <DeleteModal 
                        text = "삭제"
                        variant = "secondary" 
                        size = "sm" />
                </div>
            </div>
            <div className = "get-head-bottom">
                {type === 'person' ? 
                toPersonHead(item) :
                toJobHead(item)}
                <VoteForm />
            </div>
        </div>
    );
}

export default GetHead;