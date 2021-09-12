import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SearchForm = () => {

    const [keyword, setKeyword] = useState(null);
    const [filterBy, setFilterBy] = useState("name");
    const [type , setType ] = useState("person");

    const handleKeywordChange = e => {
        setKeyword(e.target.value);
    }

    const handleTypeChange = e => {
        const type = e.target.value;
        if(type === 'job'){
            setFilterBy("title")
        } else {
            setFilterBy("name")
        }
        setType(e.target.value);
    }


    const handleKeyDown = e => {
        if(e.key === 'Enter'){
            document.getElementsByClassName("search-link")[0].click();
            e.preventDefault();
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
            <Link className= "search-link" 
            to={"/" + type + "/list?page=1&size=16&sort=createDate&dir=desc&filterBy=" + filterBy + "&keyword=" + keyword} > 
            <Button 
                variant="outline-success" 
                bg="info" 
                >
                    GO
            </Button>
            </Link>
        </Form>
    )
}

export default React.memo(SearchForm);