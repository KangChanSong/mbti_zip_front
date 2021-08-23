import React from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';


class JobList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const jobList = [
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121},
            {name : '소방관', mbti: 'ESFP', likes: 6, views: 121}
        ];

        return (
            <div className = "jobList" >
                <ListHead type = 'job'/>
                <ItemCardGroup type = "job" itemList = {jobList} />
                <ListFoot />
            </div>
        );
    }
}

export default JobList;