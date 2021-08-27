import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import RouteContainer from '../common/RouteConatiner';

const Layout = () => {

    return (
        <div className="layout">
            <Header/>
                <RouteContainer />
            <Footer />
        </div>
    )
}

export default Layout;