import React from 'react';
import Card from 'react-bootstrap/Card';
import getRandomColor from './ColorRandomGenerator';
import './Item.css';

class PersonItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const person = {
            image : this.props.image,
            name : this.props.name,
            mbti : this.props.mbti,
            likes : this.props.likes,
            views : this.props.views
        };

        return (
            <a className = "itemLink" href="#">
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
            </a>
        )
    }
}

export default PersonItem;