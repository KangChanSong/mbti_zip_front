import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import PersonItem from './PersonItem';
import JobItem from './JobItem';

function ItemCardGroup(props){

    const type = props.type;
    const itemList = props.itemList;

    function toPersonItemList(itemList){
        return itemList.map(item => {
            return <PersonItem 
                key = {item.id}
                image = {item.image}
                name = {item.name}
                mbti = {item.mbti}
                likes = {item.likes}
                views = {item.views}
            />
        })
        
    }

    function toJobItemList(itemList){

        return itemList.map(item => {
            return <JobItem 
                key = {item.id}
                name = {item.title}
                mbti = {item.mbti}
                likes = {item.likes}
                views = {item.views}
            />
            })
    } 


    return (
        <CardGroup className = 'm-5'>
            {type === "person" ?
            toPersonItemList(itemList) :
            toJobItemList(itemList)}
        </CardGroup>
    )

}

export default ItemCardGroup;
