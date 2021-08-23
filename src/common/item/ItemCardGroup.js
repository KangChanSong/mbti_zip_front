import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import PersonItem from './PersonItem';
import JobItem from './JobItem';

class ItemCardGroup extends React.Component{
    constructor(props){
        super(props);
    }

    toPersonItemList(itemList){
        return itemList.map(item => {
            return <PersonItem 
                image = {item.image}
                name = {item.name}
                mbti = {item.mbti}
                likes = {item.likes}
                views = {item.views}
            />
        })
        
    }

    toJobItemList(itemList){
        return itemList.map(item => {
            return <JobItem 
                name = {item.name}
                mbti = {item.mbti}
                likes = {item.likes}
                views = {item.views}
            />
            })
    } 

    render(){

        const type = this.props.type;
        const itemList = this.props.itemList;

        return (
            <CardGroup className = 'm-5'>
               {type === "person" ?
                this.toPersonItemList(itemList) :
                this.toJobItemList(itemList)}
            </CardGroup>
        )
    }
}

export default ItemCardGroup;
