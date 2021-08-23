import React from 'react';
import Greeting from './greeting/Greeting';
import Trending from './trending/Trending';

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const personList = [
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'},
            {image : 'image', name : '나루토', mbti: 'ENFP'}
        ];

        const jobList = [
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'},
            {name : '소방관', mbti: 'ESFP'}
        ]

        return (
            <div className = "main">
                <Greeting />
                <Trending type = "person" itemList = {personList}/>
                <Trending type = "job" itemList = {jobList}/>
            </div>
        )
    }
}

export default Main;