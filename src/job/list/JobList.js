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

    const [extPage, extSize, extSort ,extDir] = extractProperties(location);
    const [page, setPage] = useState(extPage);
    const size = extSize;
    const sort = extSort;
    const dir = extDir;

    useEffect(() => {
        const url = createListUrlWithQuery(location.search, '/job/api/v1/list');
        fetchItems(url, 'job', setJobs, setError, setLoading);
    }, [page]);

    console.log("JobList sort : " + sort + " dir : " + dir);
    console.log("JobList location.search sort : " + location.search['sort'] + " dir : " + location.search['dir']);
    const element = (
        <div className = "jobList" >
                <ListHead 
                    type = 'job'
                    sort = {sort}
                    dir = {dir}/>
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