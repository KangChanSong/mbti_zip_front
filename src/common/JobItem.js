import React from 'react';
import Card from 'react-bootstrap/Card';
import getRandomColor from './ColorRandomGenerator';
import './Item.css';

class JobItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const job = {
            name : this.props.name,
            mbti : this.props.mbti,
            likes : this.props.likes,
            views : this.props.views
        };
        return (
            <a className = "itemLink" href="#">
            <Card className = 'm-3' border = {getRandomColor()} variant = 'top'>
            <Card.Body>
                <Card.Title>{job.name}</Card.Title>
                <Card.Text >{job.mbti}</Card.Text>
                <Card.Text>❤ : {job.likes}</Card.Text>
                <Card.Text>👁‍🗨 : {job.views}</Card.Text>
            </Card.Body>
            </Card>
            </a>
        )
    }
}

export default JobItem;