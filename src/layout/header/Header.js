import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CollapseMenu from './collapse/CollapseMenu';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <Navbar 
        style = {{
            backgroundColor : '#198754',
        }}
        variant='success' 
        lg='light' 
        expand = "lg" 
        className ="p-3" >
            <Link to = "/">
                <Navbar.Brand>
                <img
                    src="/logo.png"
                    width="60"
                    height='60'
                    className="d-inline-block align-top nav-logo"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <CollapseMenu />
        </Navbar>
    )

}

export default Header;