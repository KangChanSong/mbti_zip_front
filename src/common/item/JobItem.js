import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import './Item.css';

const JobItem = ({ job }) => {

    return (
        <Link className = "itemLink" to = {"/job/get/" + job.id} >
            <Card className = 'm-3'  variant = 'top'>
            <Card.Body>
            <img className = "item-card-image" src = {"/api/v1/file/get/" + job.filename} />
                <Card.Title>{job.title}</Card.Title>
                <Card.Text >{job.mbti}</Card.Text>
                <Card.Text>❤ : {job.likes} | 👁️ : {job.views}</Card.Text>
            </Card.Body>
            </Card>
        </Link>    
    )
}

export default JobItem;