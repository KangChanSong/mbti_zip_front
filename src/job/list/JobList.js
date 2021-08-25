import React, { useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';


function JobList(){

    const JobListElement = () => (
        <div className = "jobList" >
            <ListHead type = 'job'/>
            <ItemCardGroup type = "job" itemList = {"asdasd"} />
            <ListFoot type = 'job' />
        </div>
    );

    const [element , setElement] = useState(<JobListElement />);

    return (
        {element}
    );

}

export default JobList;