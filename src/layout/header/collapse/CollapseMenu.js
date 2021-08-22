import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';
import NavDropdown from 'react-bootstrap/NavDropdown';

class CollapseMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            
            <Navbar.Collapse id ="navbarScroll">
                <Nav
                    className ="mr-auto my-2 my-lg-0"
                    style = {{ maxHeight : '300px'}}
                    navbarScroll>
                    <Nav.Link href="#action1">MBTI</Nav.Link>
                    <Nav.Link href="#action2">직업</Nav.Link>
                    <NavDropdown title="인물" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">만화캐릭터</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">배우</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">가수</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">래퍼</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">위인</NavDropdown.Item>
                    </NavDropdown>    
                </Nav>
                <SearchForm />
            </Navbar.Collapse>
        )
    }
}

export default CollapseMenu;