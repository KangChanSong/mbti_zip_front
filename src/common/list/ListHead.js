import React from 'react';
import changeTypeToKorean from '../../common/TypeChanger';
import Form from 'react-bootstrap/Form';
import './List.css';

class ListHead extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const type = this.props.type;
        
        return (
            <div className = "listHead">
                <h2>{changeTypeToKorean(type)} 목록</h2>
                <Form.Select size='sm'>
                    <option value ="regDate.desc">최근순</option>
                    <option value = "regDate.asc">오래된순</option>
                    <option value = "likes.desc">좋아요 많은 순</option>
                    <option value = "likes.asc">좋아요 적은 순</option>
                    <option value = "views.desc">조회수 많은 순</option>
                    <option value = "views.asc">조회수 적은 순</option>
                </Form.Select>
            </div>
        );
    }
}

export default ListHead;