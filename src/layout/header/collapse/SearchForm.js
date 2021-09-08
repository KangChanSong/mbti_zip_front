import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {

    const [keyword, setKeyword] = useState(null);
    const [type , setType ] = useState("person");

    const handleKeywordChange = e => {
        setKeyword(e.target.value);
    }

    const handleTypeChange = e => {
        setType(e.target.value);
    }

    const handleClick = () => {
        
        let filterBy;
        if(type === "job"){
            filterBy = 'title'
        } else {
            filterBy = 'name'
        }
        const url = "/" + type + "/list?page=1&size=16&sort=createDate&dir=desc&filterBy=" + filterBy + "&keyword=" + keyword;
        window.location.href = url;
    }

    const handleKeyDown = e => {
        if(e.key === 'Enter'){
            e.preventDefault();
            handleClick();
        }
    }
    return (
        <Form className="d-flex" onKeyPress = {handleKeyDown}>
            <Form.Select
                className = "w-50" 
                defaultValue = {type}
                onChange = {handleTypeChange}>
                <option value="person">인물</option>
                <option value="job">직업</option>
                </Form.Select>
            <FormControl
                type="search"
                placeholder="검색"
                className ="mr-2"
                aria-label ="Search"
                onChange = {handleKeywordChange}
            />
            <Button 
                variant="outline-success" 
                bg="info" 
                onClick = {handleClick}
                >
                    GO
            </Button>
        </Form>
    )
}

export default React.memo(SearchForm);