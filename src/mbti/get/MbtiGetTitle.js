import React from 'react';
import Button from 'react-bootstrap/Button';

const MbtiGetTitle = ({ mbtiName, type}) => {

    const types = {
        person : '인물',
        job : '직업'
    }

    return (
        <div className = "mbtiGet-title">
            <h2>{mbtiName} | {types[type]}</h2>  
            <a href="#">
                <Button variant = "primary" size= "sm">
                    더보기
                </Button>
            </a>   
        </div>
    )
}

export default MbtiGetTitle;