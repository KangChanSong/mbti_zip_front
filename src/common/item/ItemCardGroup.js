import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import PersonItem from './PersonItem';
import JobItem from './JobItem';

const ItemCardGroup = ({type, itemList}) => {

    function toPersonItemList(itemList){
        return itemList.map(item => {
            return <PersonItem 
                key = {item.id}
                person = {item}
            />
        })
        
    }
    function toJobItemList(itemList){
        console.log(itemList);
        return itemList.map(item => {
            return <JobItem 
                key = {item.id}
                job = {item}
            />
            })
    } 
    return (
        <CardGroup className = ''>
            {type === "person" ?
            toPersonItemList(itemList) :
            toJobItemList(itemList)}
        </CardGroup>
    )

}

export default ItemCardGroup;
