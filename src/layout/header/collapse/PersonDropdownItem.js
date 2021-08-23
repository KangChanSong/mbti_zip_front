import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

class PersonDropdownItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const href = this.props.href;
        const value = this.props.value;

        return (
            <NavDropdown.Item href={href}>{value}</NavDropdown.Item>
        )
    }
}

export default PersonDropdownItem;