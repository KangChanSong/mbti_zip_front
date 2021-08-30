import React, { useEffect, useState } from 'react';
import MbtiGetBox from './MbtiGetBox';
import './MbtiGet.css';
import { fetchItems } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';

const MbtiGet = ({ match }) => {

    // api call
    const [ persons, setPersons] = useState(null);
    const [ jobs, setJobs] = useState(null);
    const [ error,  setError] = useState(null);
    const [ loading, setLoading] = useState(false);

    let name = match.params.name;

    useEffect(() => {
        const url = "/api/v1/list?&page=1&size=8&sort=likes&dir=desc&filterBy=mbti&keyword=" + name; 
        fetchItems("/person" + url, 'person', setPersons, setError, setLoading);
        fetchItems("/job" + url, 'job', setJobs, setError, setLoading);
    }, []);

    const element = (
        <div className = "mbtiGet">
        <MbtiGetBox 
            mbtiName = {name}
            type="person" 
            itemList = {persons}/>
        <MbtiGetBox 
            mbtiName = {name}
            type="job" 
            itemList = {jobs}/>
        </div>
    )
    
    return renderAfterApiCall({ persons : persons, jobs: jobs}, error, loading, element);
}

export default MbtiGet;