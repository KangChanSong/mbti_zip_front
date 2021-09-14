import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const TrendingHead = ({ type }) => {
    
    const types = {
        person : '인물',
        job : '직업'}
    return (
        <div className = 'trending-head'>
            <h3>Hot 🔥 | <span style = {{ fontWeight : 'lighter'}}>{types[type]}</span></h3>
            <Link to ={"/" + type + "/list?page=1&size=16&sort=likes&dir=desc"}>
                <Button variant = "success" size= "sm">
                    더보기
                </Button>
            </Link>
        </div>
    )
}

export default TrendingHead;