import React, { useEffect, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListHead from '../../common/list/ListHead';
import ListFoot from '../../common/list/ListFoot';
import axios from 'axios';

function JobList(){

    const [jobs, setJobs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try{
                setJobs(null);
                setError(null);
                setLoading(true);

                const url = "/job/api/v1/list?page=1&size=16&sort=createDate&dir=desc";
                const response = await axios.get(url);

                setJobs(response.data['jobGetDtos']);

            } catch(e){
                setError(e);
            }

            setLoading(false);
        }

        fetchItems();
    }, [])

    if(loading){
        return (
            <h1>로딩중</h1>
        )
    }
    if(error){
        return (
            <h1>{error.toString()}</h1>
        )
    }
    if(!jobs){
        return null;
    }

    return (
        <div className = "jobList" >
                <ListHead type = 'job'/>
                <ItemCardGroup type = "job" itemList = {jobs} />
                <ListFoot type = 'job' />
        </div>
    );

}

export default JobList;