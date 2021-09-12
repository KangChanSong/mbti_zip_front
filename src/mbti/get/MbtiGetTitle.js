import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

const MbtiGetTitle = ({ mbtiName, type}) => {

    const history = useHistory();

    const types = {
        person : '인물',
        job : '직업'
    }

    const handleClick = () => {
        const url = "/" + type + "/list?page=1&size=16&sort=createDate&dir=desc&filterBy=mbti&keyword=" + mbtiName;
        history.push(url);
    }

    return (
        <div className = "mbtiGet-title">
            <h2>{mbtiName} | {types[type]}</h2>  
            <a href="#">
                <Button variant = "primary" size= "sm" onClick = {handleClick}>
                    더보기
                </Button>
            </a>   
        </div>
    )
}

export default MbtiGetTitle;