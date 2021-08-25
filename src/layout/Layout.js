import React, { useState } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from '../main/Main';

function Layout(){
    const [patty , setPatty ] = useState(<Main />);

    return (
        <div className="layout">
            <Header setPatty = {setPatty} />
            {patty}
            <Footer />
        </div>
    )
}

export default Layout;