import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';
import PersonDropdownItem from './PersonDropdownItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MbtiList from '../../../mbti/list/MbtiList';
import JobList from '../../../job/list/JobList';
import PersonList from '../../../person/list/PersonList';

function CollapseMenu(props){

    let category = '';

    function handleMbtiClick(){
        props.setPatty(<MbtiList />)
    }

    function handleJobClick(){
        props.setPatty(<JobList />)
    }

    function handlePersonClick(){
        props.setPatty(<PersonList  />)
    }

    return (
        
        <Navbar.Collapse id ="navbarScroll" className = "d-flex justify-content-between">
            <Nav className = "p-2"
                style = {{ maxHeight : '300px'}}
                navbarScroll>
                <Nav.Link  onClick = {handleMbtiClick}>MBTI</Nav.Link>
                <Nav.Link onClick = {handleJobClick}>직업</Nav.Link>
                <NavDropdown title="인물" id="navbarScrollingDropdown">
                    <PersonDropdownItem onClick = {handlePersonClick} href="#" value = "전체" />
                    <PersonDropdownItem href="#" value = "위인" />
                    <PersonDropdownItem href="#" value = "과학자" />
                    <PersonDropdownItem href="#" value = "배우" />
                    <PersonDropdownItem href="#" value = "가수" />
                    <PersonDropdownItem href="#" value = "아이돌" />
                    <PersonDropdownItem href="#" value = "래퍼" /> 
                </NavDropdown>    
            </Nav>
            <Nav className = "p-2">
                <SearchForm />
            </Nav>
        </Navbar.Collapse>
    )
    

}

export default CollapseMenu;