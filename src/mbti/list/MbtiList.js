import React from 'react';
import MbtiItem from '../../common/item/MbtiItem';
import CardGroup from 'react-bootstrap/CardGroup';
import './MbtiList.css';

class MbtiList extends React.Component{
    constructor(props){
        super(props);
    }

    toMbtiList(mbtiList){
        return mbtiList.map(mbti => {
            return <MbtiItem name = {mbti.name} />
        })
    }

    render(){
        const mbtiList = [
            {name : 'INFP'},
            {name : 'INFJ'},
            {name : 'INTP'},
            {name : 'INTJ'},
            {name : 'ISFP'},
            {name : 'ISFJ'},
            {name : 'ISTP'},
            {name : 'ISTJ'},
            {name : 'ENFP'},
            {name : 'ENFJ'},
            {name : 'ENTP'},
            {name : 'ENTJ'},
            {name : 'ESFP'},
            {name : 'ESFJ'},
            {name : 'ESTP'},
            {name : 'ESTJ'}
        ];
        
        return(
            <div className = "mbtiList">
                <h1>Mbti 목록</h1>
                <CardGroup>
                    {this.toMbtiList(mbtiList)}
                </CardGroup>
            </div>
        )
    }
}

export default MbtiList;