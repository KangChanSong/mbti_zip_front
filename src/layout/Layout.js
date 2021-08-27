import React, { useState } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from '../main/Main';
import JobList from '../job/list/JobList';
import PersonList from '../person/list/PersonList';
import MbtiList from '../mbti/list/MbtiList';
import { Route } from 'react-router-dom';

const Layout = () => {

    return (
        <div className="layout">
            <Header/>
            <Route exact path = "/" component = {Main}/>
            <Route path = "/mbti/list" component = {MbtiList}/>
            <Route path = "/job/list" component = {JobList} />
            <Route path = "/person/list" component = {PersonList} />
            <Footer />
        </div>
    )
}

export default Layout;