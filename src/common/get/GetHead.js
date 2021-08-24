import React from 'react';
import changeTypeToKorean from '../TypeChanger';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import VoteForm from '../../vote/VoteForm';
import DeleteModal from '../../modal/DeleteModal';
import './GetHead.css';

class GetHead extends React.Component{

    constructor(props){
        super(props);
    }

    toPersonHead(item){
        
        return (
            <Alert variant = "light" className = "person-get-alert" >
                <Image src="https://media.comicbook.com/2020/12/naruto-1249229.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart/" thumbnail />
                <p>작성자 : {item.writer}</p>
                <p>분류 : {item.category}</p>
                <p>투표 결과 : {item.mbti}</p>
            </Alert>  
        )
    }

    toJobHead(item){
        return (
            <Alert variant = "light" size = "lg" className = "job-get-alert">
                <p>작성자 : {item.writer}</p>
                <p>투표 결과 : {item.mbti}</p>
            </Alert>            
        )
    }

    render(){
        const item = this.props.item;
        const type = this.props.type;

        return (
            <div className = "get-head">
                <div className = "get-head-top">
                    <h2>{changeTypeToKorean(type)} | {type === 'person' ? item.name : item.title}</h2>
                    <DeleteModal 
                        text = "삭제"
                        variant = "secondary" 
                        size = "sm" />
                </div>
                <div className = "get-head-bottom">
                    {type === 'person' ? 
                    this.toPersonHead(item) :
                    this.toJobHead(item)}
                    <VoteForm />
                </div>
            </div>
        );
    }    
}

export default GetHead;