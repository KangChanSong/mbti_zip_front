import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CollapseMenu from './collapse/CollapseMenu';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Navbar bg="light" expand = "lg" className ="p-3">
                <Navbar.Brand href="#">MBTI.zip</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <CollapseMenu />
            </Navbar>
        )
    }
}

export default Header;