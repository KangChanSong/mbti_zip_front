import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const PersonDropdownItem = ({name}) => {

    const url = "/person/list?sort=createDate&dir=desc&filterBy=category&keyword=";

    return (
        <NavDropdown.Item >
            <Link to={url + name}>
                {name}
            </Link>
        </NavDropdown.Item>
    )

}

export default PersonDropdownItem;