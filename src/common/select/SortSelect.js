import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './SortSelect.css';

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

const ItemDropdown = ({ type }) => {

        const getUrl = (sort, dir) => ("/" + type + "/list?page=1&size=16&sort=" + sort + "&dir=" + dir);

        return (
                <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        정렬
                        </Dropdown.Toggle>

                <Dropdown.Menu>
                        <Dropdown.Item className = "sort-item">
                                <Link className = "sort-link" to = {getUrl(createDate, desc)}>
                                최근순
                                </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className = "sort-item">
                                <Link className = "sort-link" to = {getUrl(createDate, asc)}>
                                오래된순
                                </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className = "sort-item">
                                <Link className = "sort-link" to = {getUrl(likes, desc)}>
                                좋아요 많은 순
                                </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className = "sort-item">
                                <Link className = "sort-link" to = {getUrl(likes, asc)}>
                                좋아요 적은 순
                                </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className = "sort-item">
                                <Link className = "sort-link" to = {getUrl(views, desc)}>
                                조회수 많은 순
                                </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className = "sort-item">
                                <Link className = "sort-link" to = {getUrl(views, asc)}>
                                조회수 적은 순
                                </Link>
                        </Dropdown.Item>
                
                </Dropdown.Menu>
                </Dropdown>
        )
}

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
                    <ItemDropdown 
                        type = {type}
                    />}
            </>
    )
}

export default SortSelect;