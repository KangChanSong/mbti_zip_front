import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CollapseMenu from './collapse/CollapseMenu';
import { Link } from 'react-router-dom';

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
                    width="65"
                    height='65'
                    className="d-inline-block align-top"
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