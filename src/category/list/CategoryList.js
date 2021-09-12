import React, { useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import { fetchItems } from '../../modules/apiCaller';

const CategoryList = () => {

    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        const url = "/api/v1/category/list";
        fetchItems(url, 'category', setCategories, setError, setLoading);
    }, []);

    if(error){  
        return <p>에러 발생</p>
    }
    if(loading){
        return <p>로딩중..</p>
    }
    if(!categories){
        return <p>아무것도 없습니다.</p>
    }
    return (
        <Form.Select name = "categoryId">
            <option>카테고리를 선택하세요.</option>
            {categories.map(category => 
            <option key = {category.id} value = {category.id}> {category.name} </option>)}
        </Form.Select>
    )
}

export default CategoryList;