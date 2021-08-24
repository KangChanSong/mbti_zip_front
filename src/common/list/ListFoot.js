import React from 'react';
import Page from '../Page';
import Button from 'react-bootstrap/Button';
import './List.css';
class ListFoot extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "listFoot" >
                <div></div>
                <Page />     

                <Button variant = "primary" size= "sm">
                        등록하기
                </Button>
            </div>
        )
    }
}

export default ListFoot;