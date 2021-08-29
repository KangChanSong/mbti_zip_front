import React from 'react';
import Card from 'react-bootstrap/Card';
import getRandomColor from '../ColorRandomGenerator';
import { Link } from 'react-router-dom';


import './Item.css';

const JobItem = ({ job }) => {

    return (
        <Link className = "itemLink" to = {"/job/get/" + job.id} >
            <Card className = 'm-3' border = {getRandomColor()} variant = 'top'>
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text >{job.mbti.toUpperCase()}</Card.Text>
                <Card.Text>❤ : {job.likes}</Card.Text>
                <Card.Text>👁‍🗨 : {job.views}</Card.Text>
            </Card.Body>
            </Card>
        </Link>    
    )
}

export default JobItem;