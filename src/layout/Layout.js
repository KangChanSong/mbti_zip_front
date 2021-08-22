import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

class Layout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="layout">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Layout;