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
            mbti : this.props.mbti
        };
        return (
            <a href="#">
            <Card className = 'p-4 m-3' border = {getRandomColor()} variant = 'top'>
            <Card.Body>
                <Card.Title>{job.name}</Card.Title>
                <Card.Text >{job.mbti}</Card.Text>
            </Card.Body>
            </Card>
            </a>
        )
    }
}

export default JobItem;