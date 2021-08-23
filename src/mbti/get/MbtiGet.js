import React from 'react';
import MbtiGetBox from './MbtiGetBox';
import './MbtiGet.css';

class MbtiGet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const mbti = this.props.mbti;

        const personList = [
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100}
        ];

        const jobList = [
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121}
        ]

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
}

export default MbtiGet;