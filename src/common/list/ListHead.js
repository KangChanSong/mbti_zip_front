import React from 'react';
import changeTypeToKorean from '../../common/TypeChanger';
import Form from 'react-bootstrap/Form';
import './List.css';

const ListHead = ({ type, sort, dir }) => {

    const VALUE_ERR = "value 값이 잘못되었습니다. value : ";

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
            <Form.Select size='sm' onChange = {handleChange}>
                <option value = {createDate + "#" +  desc} 
                    selected = {
                        sort == createDate && dir == desc 
                    }>
                        최근순
                </option>
                <option value = {createDate + "#" +  asc}
                selected = {
                        sort == createDate && dir == asc 
                    }>
                        오래된순
                </option>
                <option value = {likes + "#" +  desc}
                selected = {
                        sort == likes && dir == desc 
                    }>  
                        좋아요 많은 순
                </option>
                <option value = {likes + "#" +  asc}
                selected = {
                        sort == likes && dir == asc
                    }>
                        좋아요 적은 순
                </option>
                <option value = {views + "#" +  desc}
                selected = {
                        sort == views && dir == desc
                    }>
                        조회수 많은 순
                </option>
                <option value = {views + "#" +  asc}
                selected = {
                        sort == views && dir == asc
                    }>
                        조회수 적은 순
                </option>
            </Form.Select>
        </div>
    );
}

export default React.memo(ListHead);