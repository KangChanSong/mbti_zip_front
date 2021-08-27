import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../main/Main';
import JobList from '../job/list/JobList';
import PersonList from '../person/list/PersonList';
import PersonGet from '../person/get/PersonGet';
import MbtiList from '../mbti/list/MbtiList';
import JobGet from '../job/get/JobGet';

const RouteContainer = () => {
    return (
        <>
            <Route exact path = "/" component = {Main}/>
            <Route path = "/mbti/list" component = {MbtiList}/>
            <Route path = "/job/list" component = {JobList} />
            <Route path = "/person/list" component = {PersonList} />
            <Route path = "/person/get/:personId" component = {PersonGet}/>
            <Route path = "/job/get/:jobId" component = {JobGet} />
        </>
    )
}

export default RouteContainer;