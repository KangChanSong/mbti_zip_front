import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Main from '../../main/Main';
import CollapseMenu from './collapse/CollapseMenu';

const Header = ({ onLogoClick }) => {

    return (
        <Navbar bg="light" expand = "lg" className ="p-3">
            <Navbar.Brand href="#" onClick = {() => onLogoClick(<Main />)}>MBTI.zip</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <CollapseMenu />
        </Navbar>
    )

}

export default Header;