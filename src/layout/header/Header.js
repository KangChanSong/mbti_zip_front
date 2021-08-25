import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CollapseMenu from './collapse/CollapseMenu';
import Main from '../../main/Main';

function Header(props){

    function handleBrandCLick(){
        props.setPatty(<Main />)
    }

    return (
        <Navbar bg="light" expand = "lg" className ="p-3">
            <Navbar.Brand href="#" onClick = {handleBrandCLick}>MBTI.zip</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <CollapseMenu setPatty = {props.setPatty} />
        </Navbar>
    )

}

export default Header;