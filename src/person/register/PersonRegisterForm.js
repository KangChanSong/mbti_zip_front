import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageForm from '../../common/register/ImageForm';
import CategoryList from '../../category/list/CategoryList';
    
const PersonRegisterForm = ( {handleChange, handleSubmit} ) => 
{      
    const [image, setImage] = useState(null);
    return (
        <div className = "register">
            <h1>인물 등록</h1>
            <Form onChange = {handleChange}>
                <Form.Group className = "mb-3">
                    <Form.Control
                        type="text"
                        name = "name"
                        placeholder = "인물 이름을 입력하세요" />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <Form.Control
                    name = "writer"
                    type="text"
                    placeholder = "작성자를 입력하세요." />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <ImageForm image = {image} setImage = {setImage} /> 
                </Form.Group>
                <Form.Group className ="mb-3">
                    <Form.Select name = "gender">
                        <option>성별을 선택하세요.</option>
                        <option value ="MALE">남</option>
                        <option value = "FEMALE">여</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className ="mb-3">
                    <CategoryList />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <Form.Control
                    name = "description"
                    type="text"
                    placeholder = "설명을 입력하세요." />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <Form.Control
                        name ="password"
                        type="password"
                        placeholder = "비밀번호를 입력하세요." />
                </Form.Group>
            </Form>
            <div className = "register-button">
                <Button variant = "primary" onClick = {handleSubmit}>인물 등록</Button>
            </div>
        </div>
    );
};

export default PersonRegisterForm;