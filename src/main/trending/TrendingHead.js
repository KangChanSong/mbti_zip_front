import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
class TrendingHead extends React.Component{
    constructor(props){
        super(props);
    }

    render(){        
        const types = {
            person : '인물',
            job : '직업'
        }

        const type = this.props.type;

        return (
            <div className = 'trending-head'>
                <h3>실시간 베스트 | {types[type]}</h3>
                <Link to ="/job/list">
                    <Button variant = "primary" size= "sm">
                        더보기
                    </Button>
                </Link>
            </div>
        )
    }
}

export default TrendingHead;