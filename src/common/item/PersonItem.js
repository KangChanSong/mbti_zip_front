import React from 'react';
import Card from 'react-bootstrap/Card';
import getRandomColor from '../ColorRandomGenerator';
import './Item.css';
import { Link } from 'react-router-dom';

const PersonItem = ({ person }) => {



    return (
        <Link className = "itemLink" to={"/person/get/" + person.id} >
            <Card className="m-3" border={getRandomColor()}>
                <Card.Img
                    className = "item-card-image"
                    variant = 'top' src = 'https://media.comicbook.com/2020/12/naruto-1249229.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart/'/>
                <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>{person.mbti}</Card.Text>
                    <Card.Text>❤ : {person.likes}</Card.Text>
                    <Card.Text>👁‍🗨 : {person.views}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PersonItem;  