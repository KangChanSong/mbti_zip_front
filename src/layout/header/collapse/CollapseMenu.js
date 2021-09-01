import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';
import PersonDropdownItem from './PersonDropdownItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Collapse.css';

const CollapseMenu = () => {

    return (
        <Navbar.Collapse id ="navbarScroll" className = "d-flex justify-content-between">
            <Nav className = "p-2"
                style = {{ maxHeight : '300px'}}
                navbarScroll>
                <Nav.Link>
                    <Link to ="/mbti/list" className="my-nav-link" >MBTI</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to ="/job/list" className="my-nav-link">직업</Link>
                </Nav.Link>
                <NavDropdown title="인물"  className="my-nav-link" id="navbarScrollingDropdown">
                    <PersonDropdownItem value = "전체" />
                    <PersonDropdownItem value = "위인" />
                    <PersonDropdownItem value = "과학자" />
                    <PersonDropdownItem value = "배우" />
                    <PersonDropdownItem value = "가수" />
                    <PersonDropdownItem value = "아이돌" />
                    <PersonDropdownItem value = "래퍼" /> 
                </NavDropdown>    
            </Nav>
            <Nav className = "p-2">
                <SearchForm />
            </Nav>
        </Navbar.Collapse>
    )
    

}

export default CollapseMenu;