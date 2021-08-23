import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import PersonItem from '../../common/PersonItem';
import JobItem from '../../common/JobItem';
import TrendingHead from './TrendingHead';
import './Trending.css';

class Trending extends React.Component{
    constructor(props){
        super(props);
    }

    toPersonItemList(itemList){
        return itemList.map(item => {
            return <PersonItem 
                image = {item.image}
                name = {item.name}
                mbti = {item.mbti}
            />
        })
        
    }

    toJobItemList(itemList){
        return itemList.map(item => {
            return <JobItem 
                name = {item.name}
                mbti = {item.mbti}
            />
            })
    } 


    render(){
        const type = this.props.type;
        const itemList = this.props.itemList;

        return (
        <div className = "trending">
            <TrendingHead type={type} />
            <CardGroup>
               {type === "person" ?
                this.toPersonItemList(itemList) :
                this.toJobItemList(itemList)}
            </CardGroup>
        </div>
        )
    }
}

export default Trending;