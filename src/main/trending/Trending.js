import React from 'react';
import TrendingHead from './TrendingHead';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import './Trending.css';

function Trending(props){

    const type = props.type;
    const itemList = props.itemList;

    return (
    <div className = "trending">
        <TrendingHead type={type} />
        <ItemCardGroup type = {type} itemList = {itemList} />
    </div>
    )

}

export default Trending;