import React from 'react';
import Page from '../Page';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';
import './List.css';
const ListFoot = ({ type, curr, size, setPage }) => {
    return (
        <div className = "listFoot" >
            <div></div>
            <Page 
                setPage = {setPage}
                curr = {curr}
                size = {size}
                type = {type}
            />     
            <Link to ={"/" + type + "/register"}>
                <Button 
                    variant = "primary" 
                    size= "sm">
                    등록하기
                </Button>
            </Link>
        </div>
    )

}

export default ListFoot;