import React from 'react';
import Page from '../Page';
import Button from 'react-bootstrap/Button';
import Register from '../../common/register/Register';
import './List.css';
function ListFoot(props){
    function handleClick(){
        props.setElement(<Register type = {props.type}/>)
    }

    return (
        <div className = "listFoot" >
            <div></div>
            <Page />     
            <Button 
                variant = "primary" 
                size= "sm"
                onClick = {handleClick}>
                    등록하기
            </Button>
        </div>
    )

}

export default ListFoot;