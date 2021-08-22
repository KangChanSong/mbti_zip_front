import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Form className="d-flex">
                <Form.Select className = "w-50">
                    <option value="person">인물</option>
                    <option value="job">직업</option>
                    </Form.Select>
                <FormControl
                    type="search"
                    placeholder="검색"
                    className ="mr-2"
                    aria-label ="Search"
                />
                <Button variant="outline-success" bg="info">GO</Button>
            </Form>
        )
    }
}

export default SearchForm;