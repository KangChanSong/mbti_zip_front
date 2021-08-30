import React from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import MbtiGetTitle from './MbtiGetTitle';

const MbtiGetBox = ({type , mbtiName, itemList}) => {

    return (
        <div className="mbtiGet-box">
            
            <MbtiGetTitle 
                mbtiName = {mbtiName}
                type = {type}
            />
            { itemList ? 
                <ItemCardGroup 
                type = {type}
                itemList = {itemList}
                />
                :
                <></>
            }
            
        </div>
    )
}

export default MbtiGetBox;