import React from 'react';
import Form from 'react-bootstrap/Form';

const desc = "desc";
const asc= "asc"
const createDate = "createDate";
const updateDate = "updateDate";
const likes = "likes";
const views = "views";

const CommentSelect = ({ onChange, sort, dir}) => (
    <Form.Select size='sm' onChange = {onChange} defaultValue = {sort + "#" + dir}>
            <option value = {updateDate + "#" +  desc}>
                    최근순
            </option>
            <option value = {updateDate + "#" +  asc}>
                    오래된순
            </option>
    </Form.Select>)


const ItemSelect = ({ onChange, sort ,dir}) => (
    <Form.Select size='sm' onChange = {onChange} defaultValue = {sort + "#" + dir}>
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
    </Form.Select>)

const SortSelect = ({type, sort , dir, handleChange}) => {

    // handleChange 에 선택된 sort, dir 전달
    const onChange = (e) => {
            const [ extSort, extDir ] = e.target.value.split("#");
            handleChange({
                sort : extSort,
                dir : extDir,
            });
    }  
    return (
            <>
            {type === 'comment' ?
                    <CommentSelect
                            onChange = {onChange}
                            sort = {sort}
                            dir = {dir}
                    /> :
                    <ItemSelect 
                            onChange = {onChange}
                            sort = {sort}
                            dir = {dir}
                    />}
            </>
    )
}

export default SortSelect;