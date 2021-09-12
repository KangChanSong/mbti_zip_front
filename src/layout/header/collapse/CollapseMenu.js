import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';
import PersonDropdownItem from './PersonDropdownItem';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Collapse.css';
import { useFetchOne } from '../../../hooks/CustomHooks';

const CollapseMenu = () => {

    const [data, loading, error ] = useFetchOne("/api/v1/category/list");

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
                    <PersonDropdownItem name = "전체" />
                    { data ? 
                        data['categoryGetDtos'].map( category => {
                        return <PersonDropdownItem key = {category.id} name = {category.name} />
                        }) : ""
                    }
                    { loading ?
                         "로딩중..." : <></>}
                    { error ? 
                        "에러 : " + error : <></>  }
                </NavDropdown>    
            </Nav>
            <Nav className = "p-2">
                <SearchForm />
            </Nav>
        </Navbar.Collapse>
    )
    

}

export default React.memo(CollapseMenu);