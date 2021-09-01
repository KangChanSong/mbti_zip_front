import React from 'react';
import changeTypeToKorean from '../../common/TypeChanger';
import Form from 'react-bootstrap/Form';
import './List.css';

const ListHead = ({ type, sort, dir }) => {

    const desc = "desc";
    const asc= "asc"
    const createDate = "createDate";
    const likes = "likes";
    const views = "views";

    const handleChange = (e) => {
        const [ sort, dir ] = e.target.value.split("#");
        const url = "/" + type + "/list?page=1&size=16&sort=" + sort + "&dir=" + dir; 
        window.location.href = url;
    }  

    return (
        <div className = "listHead">
            <h2>{changeTypeToKorean(type)} 목록</h2>
            <Form.Select size='sm' onChange = {handleChange} defaultValue = {sort + "#" + dir}>
                <option value = {createDate + "#" +  desc}>
                        최근순
                </option>
                <option value = {createDate + "#" +  asc}>
                        오래된순
                </option>
                <option value = {likes + "#" +  desc}>  
                        좋아요 많은 순
                </option>
                <option value = {likes + "#" +  asc}>
                        좋아요 적은 순
                </option>
                <option value = {views + "#" +  desc}>
                        조회수 많은 순
                </option>
                <option value = {views + "#" +  asc}>
                        조회수 적은 순
                </option>
            </Form.Select>
        </div>
    );
}

export default React.memo(ListHead);