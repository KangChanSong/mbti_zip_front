import React, { useEffect, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';
import { fetchItems } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';
import { createListUrlWithQuery } from '../../modules/urlGenerator';
import { extractProperties } from '../../modules/queryExtractor';

function JobList({ location }){

    const [jobs, setJobs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [extPage, size, sort , dir , filterBy, keyword] = extractProperties(location);
    const [page, setPage] = useState(extPage);

    useEffect(() => {
        const url = createListUrlWithQuery(location.search, '/api/v1/job/list');
        fetchItems(url, 'job', setJobs, setError, setLoading);
    }, [page,sort ,dir ,filterBy, keyword]);

    const element = (
        <div className = "jobList" >
                <ListHead 
                    type = 'job'
                    sort = {sort}
                    dir = {dir}
                    keyword = {keyword}/>
                <ItemCardGroup type = "job" itemList = {jobs} />
                <ListFoot 
                    setPage = {setPage}
                    curr = {page}
                    size = {size}
                    type = 'job' />
        </div>
        );

    return renderAfterApiCall(jobs, error, loading, element);
}



export default JobList;