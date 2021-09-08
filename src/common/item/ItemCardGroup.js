import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import PersonItem from './PersonItem';
import JobItem from './JobItem';
import { NoItemFound } from '../../modules/renderHelper';
import changeTypeToKorean from '../TypeChanger';

const ItemCardGroup = ({type, itemList}) => {

    if(!itemList) return null;

    function toPersonItemList(itemList){
        return itemList.map(item => {
            return <PersonItem 
                key = {item.id}
                person = {item}
            />
        })
        
    }
    function toJobItemList(itemList){
        return itemList.map(item => {
            return <JobItem 
                key = {item.id}
                job = {item}
            />
            })
    } 
    return (
        <>
        {
            itemList && (itemList.length > 0) ? 
                <CardGroup className = ''>
                    {type === "person" ?
                    toPersonItemList(itemList) :
                    toJobItemList(itemList)}
                </CardGroup> : 
                <NoItemFound type = {changeTypeToKorean(type)} />
        }

        
        </>
    )

}

export default ItemCardGroup;
