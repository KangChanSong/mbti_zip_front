import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
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
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>

                <Button variant = "primary" size= "sm">
                        등록하기
                </Button>
            </div>
        )
    }
}

export default ListFoot;