import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';
import PersonDropdownItem from './PersonDropdownItem';
import NavDropdown from 'react-bootstrap/NavDropdown';

class CollapseMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            
            <Navbar.Collapse id ="navbarScroll" className = "d-flex justify-content-between">
                <Nav className = "p-2"
                    style = {{ maxHeight : '300px'}}
                    navbarScroll>
                    <Nav.Link href="#action1">MBTI</Nav.Link>
                    <Nav.Link href="#action2">직업</Nav.Link>
                    <NavDropdown title="인물" id="navbarScrollingDropdown">
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
}

export default CollapseMenu;