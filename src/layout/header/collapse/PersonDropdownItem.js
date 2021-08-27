import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const PersonDropdownItem = (props) => {

    const value = props.value;

    return (
        <NavDropdown.Item >
            <Link to="/person/list">
                {value}
            </Link>
        </NavDropdown.Item>
    )

}

export default PersonDropdownItem;