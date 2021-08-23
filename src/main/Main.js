import React from 'react';
import Greeting from './greeting/Greeting';
import Trending from './trending/Trending';

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

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
            <div className = "main">
                <Greeting />
                <Trending type = "person" itemList = {personList}/>
                <Trending type = "job" itemList = {jobList}/>
            </div>
        )
    }
}

export default Main;