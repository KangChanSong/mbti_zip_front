import React from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import MbtiGet from './MbtiGet';
import MbtiGetTitle from './MbtiGetTitle';

class MbtiGetBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const type = this.props.type;
        const mbti = this.props.mbti;
        const itemList = this.props.itemList;

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
}

export default MbtiGetBox;