import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Item.css';
import { Link } from 'react-router-dom';

const PersonItem = ({ person }) => {

    return (
        <Link className = "itemLink" to={"/person/get/" + person.id} >
            <Card className="m-3" >
                <Card.Body>
                <img className = "item-card-image" src = {"/api/v1/file/get/" + person.filename} />
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Text>{person.category} | {person.mbti} </Card.Text>
                    <Card.Text>❤ : {person.likes} | 👁️ : {person.views}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PersonItem;  