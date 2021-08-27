import React, { useEffect, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';
import { getListFromServer } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';
import axios from 'axios';

function JobList(){

    const [jobs, setJobs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = "/job/api/v1/list?page=1&size=16&sort=createDate&dir=desc";
        getListFromServer(url, 'job', setJobs, setError, setLoading);
    }, [])

    const element = (
        <div className = "jobList" >
                <ListHead type = 'job'/>
                <ItemCardGroup type = "job" itemList = {jobs} />
                <ListFoot type = 'job' />
        </div>
    );

    const render = renderAfterApiCall(jobs, error, loading, element);

    return render;
}

export default JobList;