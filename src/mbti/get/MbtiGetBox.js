import React from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import MbtiGet from './MbtiGet';
import MbtiGetTitle from './MbtiGetTitle';

const MbtiGetBox = (props) => {

    const type = props.type;
    const mbti = props.mbti;
    const itemList = props.itemList;

    return (
        <div className="mbtiGet-box">
            <MbtiGetTitle 
                mbti = {mbti}
                type = {type}
            />
            <ItemCardGroup 
                type = {type}
                itemList = {itemList}
            />          
        </div>
    )
}

export default MbtiGetBox;