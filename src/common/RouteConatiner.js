import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../main/Main';

import MbtiList from '../mbti/list/MbtiList';
import MbtiGet from '../mbti/get/MbtiGet';

import PersonList from '../person/list/PersonList';
import PersonGet from '../person/get/PersonGet';

import JobList from '../job/list/JobList';
import JobGet from '../job/get/JobGet';

import Register from './register/Register';
import { NotFound404 } from '../modules/renderHelper';

const RouteContainer = () => {
    return (
        <>
        <Switch>
            <Route exact path = "/" component = {Main}/>
            <Route path = "/mbti/list" component = {MbtiList}/>
            <Route path = "/mbti/get/:name" component = {MbtiGet} />
            
            <Route path = "/person/list" component = {PersonList} />
            <Route path = "/person/get/:personId" component = {PersonGet}/>

            <Route path = "/job/list" component = {JobList} />
            <Route path = "/job/get/:jobId" component = {JobGet} />
            
            <Route path = "/:type/register" component = {Register} />
            <Route component = {NotFound404} />
        </Switch>
        </>
    )
}

export default RouteContainer;