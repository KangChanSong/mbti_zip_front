import React from 'react';
import TrendingHead from './TrendingHead';
import ItemCardGroup from '../../common/ItemCardGroup';
import './Trending.css';

class Trending extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const type = this.props.type;
        const itemList = this.props.itemList;

        return (
        <div className = "trending">
            <TrendingHead type={type} />
            <ItemCardGroup type = {type} itemList = {itemList} />
        </div>
        )
    }
}

export default Trending;