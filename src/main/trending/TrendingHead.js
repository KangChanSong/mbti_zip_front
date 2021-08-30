import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const TrendingHead = ({ type }) => {
    
    const types = {
        person : '인물',
        job : '직업'}
    return (
        <div className = 'trending-head'>
            <h3>실시간 베스트 | {types[type]}</h3>
            <Link to ={"/" + type + "/list"}>
                <Button variant = "primary" size= "sm">
                    더보기
                </Button>
            </Link>
        </div>
    )
}

export default TrendingHead;