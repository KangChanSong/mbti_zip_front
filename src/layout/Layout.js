import React, { useState } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from '../main/Main';

const Layout = ({ children, onLogoClick }) => {

    return (
        <div className="layout">
            <Header onLogoClick = {onLogoClick} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;