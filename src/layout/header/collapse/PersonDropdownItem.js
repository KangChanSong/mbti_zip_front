import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const PersonDropdownItem = ({name}) => {
    let baseUrl = "/person/list?page=1&size=16&sort=createDate&dir=desc";
    
    let url = baseUrl + "&filterBy=category&keyword=" + name;
    if(name === '전체'){
        url = baseUrl
    }
    return (
        
            <NavDropdown.Item style = {{ display : 'flex'}}>
                <Link to={url}
                    style = {{ width : '100%', height : '100%'}}>        
                    {name}
                </Link>        
            </NavDropdown.Item>
        
    )

}

export default PersonDropdownItem;