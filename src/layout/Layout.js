import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

class Layout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="layout">
                <Header />
                <Sidebar />
                <Footer />
            </div>
        )
    }
}

export default Layout;