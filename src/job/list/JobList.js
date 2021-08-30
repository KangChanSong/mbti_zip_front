import React, { useEffect, useRef, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';
import { fetchItems } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';
import { createListUrlWithQuery } from '../../modules/urlGenerator';
import { extractPageAndSize } from '../../modules/queryExtractor';

function JobList({ location }){

    const [jobs, setJobs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, size] = extractPageAndSize(location);

    const requestToServer = () => {
        const url = createListUrlWithQuery(location.search, '/job/api/v1/list');
        fetchItems(url, 'job', setJobs, setError, setLoading);
    }

    useEffect(() => {requestToServer()}, []);

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

    return renderAfterApiCall(jobs, error, loading, element);
}



export default JobList;