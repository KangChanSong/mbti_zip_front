import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Greeting from './greeting/Greeting';
import Trending from './trending/Trending';

function Main (){

    const[persons, setPersons] = useState(null);
    const[jobs , setJobs] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {

        const fetchItems = async () => {
            try{
                setPersons(null);
                setJobs(null);
                setLoading(true);
                setError(null);
                
                const urlSuffix = "/api/v1/list?page=1&size=8&sort=likes&dir=desc";
                const personResponse = await axios.get("/person" + urlSuffix );
                const jobResponse = await axios.get("/job" + urlSuffix ); 
                setPersons(personResponse.data['personGetDtos']);
                setJobs(jobResponse.data['jobGetDtos']);

            } catch (e){
                setError(e);
            }
            setLoading(false);
        }

        fetchItems();
    }, [])

    if(loading){
        return <h1>로딩중</h1>;
    }
    if(error) {
        return <h1> {error.toString()} </h1>;
    }
    if(!persons && !jobs){
        return null;
    }

    return (
            <div className = "main">
                <Greeting />
                <Trending type = "person" itemList = {persons}/>
                <Trending type = "job" itemList = {jobs}/>
            </div>
    )
}

export default Main;