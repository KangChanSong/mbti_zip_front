import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from './SearchForm';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Navbar bg="light" expand = "true" className ="p-3">
                <Navbar.Brand href="#">MBTI.zip</Navbar.Brand>
                <Link type ="mbti" />
                <Link type ="job" />
                <DropdownLink type="person" />
                <SearchForm />
            </Navbar>
        )
    }
}

export default Header;