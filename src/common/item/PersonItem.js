import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { Link } from 'react-router-dom';

const PersonItem = ({ person }) => {

    return (
        <Link className = "itemLink" to={"/person/get/" + person.id} >
            <Card className="m-3" >
                <img className = "item-card-image" src = {"/file/api/v1/get/" + person.filename} />
                <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>MBTI : {person.mbti}</Card.Text>
                    <Card.Text>분류 : {person.category}</Card.Text>
                    <Card.Text>❤ : {person.likes}</Card.Text>
                    <Card.Text>👁‍🗨 : {person.views}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PersonItem;  