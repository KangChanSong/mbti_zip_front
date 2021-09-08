import React from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import MbtiGetTitle from './MbtiGetTitle';
import changeTypeToKorean from '../../common/TypeChanger';
import { NoItemFound } from '../../modules/renderHelper';


const MbtiGetBox = ({type , mbtiName, itemList}) => {

    return (
        <div className="mbtiGet-box">
            
            <MbtiGetTitle 
                mbtiName = {mbtiName}
                type = {type}
            />
            { itemList && (itemList.length > 0) ? 
                <ItemCardGroup 
                type = {type}
                itemList = {itemList}
                />
                :
                <NoItemFound type = {changeTypeToKorean(type)} />
            }
        </div>
    )
}

export default MbtiGetBox;