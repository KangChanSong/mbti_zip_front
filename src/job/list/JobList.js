import React, { useEffect, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';
import { fetchItems } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';
import { createListUrlWithQuery } from '../../modules/urlGenerator';
import { extractPageAndSize } from '../../modules/queryExtractor'

function JobList({ location }){

    const [jobs, setJobs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { page, size } = extractPageAndSize(location);

    useEffect(() => {
        const url = createListUrlWithQuery(location.search, '/job/api/v1/list');
        fetchItems(url, 'job', setJobs, setError, setLoading);
    }, [])

    const element = (
        <div className = "jobList" >
                <ListHead type = 'job'/>
                <ItemCardGroup type = "job" itemList = {jobs} />
                <ListFoot 
                    curr = {page}
                    size = {size}
                    type = 'job' />
        </div>
    );

    const render = renderAfterApiCall(jobs, error, loading, element);

    return render;
}



export default JobList;