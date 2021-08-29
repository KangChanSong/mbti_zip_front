import React from 'react';
import Page from '../Page';
import Button from 'react-bootstrap/Button';
import Register from '../../common/register/Register';
import { Link  } from 'react-router-dom';
import './List.css';
const ListFoot = ({ type }) => {
    return (
        <div className = "listFoot" >
            <div></div>
            <Page />     
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