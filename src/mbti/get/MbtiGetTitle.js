import React from 'react';
import Button from 'react-bootstrap/Button';

class MbtiGetTitle extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const types = {
            person : '인물',
            job : '직업'
        }

        const mbti = this.props.mbti;
        const type = this.props.type;

        return (
            <div className = "mbtiGet-title">
                <h2>{mbti} | {types[type]}</h2>  
                <a href="#">
                    <Button variant = "primary" size= "sm">
                        더보기
                    </Button>
                </a>   
            </div>
        )
    }
}

export default MbtiGetTitle;