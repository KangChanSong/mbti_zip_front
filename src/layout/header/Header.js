import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CollapseMenu from './collapse/CollapseMenu';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Navbar bg="light" expand = "lg" className ="p-3">
            <Link to = "/"><Navbar.Brand>MBTI.zip</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <CollapseMenu />
        </Navbar>
    )

}

export default Header;