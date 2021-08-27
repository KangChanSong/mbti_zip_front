import React from 'react';
import MbtiGetBox from './MbtiGetBox';
import './MbtiGet.css';

const MbtiGet = () => {

    // api call
    const personList = [];
    const jobList = [];

    return (
        <div className = "mbtiGet">
        <MbtiGetBox 
            mbti = {mbti}
            type="person" 
            itemList = {personList}/>
        <MbtiGetBox 
            mbti = {mbti}
            type="job" 
            itemList = {jobList}/>
        </div>
    )
}

export default MbtiGet;