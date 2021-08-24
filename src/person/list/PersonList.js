import React from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListFoot from '../../common/list/ListFoot';
import ListHead from '../../common/list/ListHead';

class PersonList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const personList = [
            {image : 'image', name : '나asdas루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : 'sdsd나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루sd토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나sdd루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루sd토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나sd루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나sdsd루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : 'sdsdsdsdsds나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나sds루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루토', mbti: 'ENFP', likes: 4, views: 100},
            {image : 'image', name : '나루sdsd토', mbti: 'ENFP', likes: 4, views: 100}
        ];

        return (
            <div className = "personList">
                <ListHead type = 'person' />
                <ItemCardGroup type = 'person' itemList = {personList} />
                <ListFoot />
            </div>
        )

    }
}

export default PersonList;