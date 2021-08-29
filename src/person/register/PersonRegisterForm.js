import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
    
const PersonRegisterForm = ( {setForm, handleChange, handleSubmit } ) => 
(
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
                <Form.Control
                name = "image"
                type="file" />
                썸네일을 업로드하세요.
            </Form.Group>
            <Form.Group className ="mb-3">
                <Form.Select name = "gender">
                    <option>성별을 선택하세요.</option>
                    <option value ="male">남</option>
                    <option value = "female">여</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className ="mb-3">
                <Form.Select name = "categoryIds">
                    <option>카테고리를 선택하세요.</option>
                    <option value= "?">만화캐릭터</option>
                    <option value= "?">연기자</option>
                    <option value= "?">개그맨</option>
                    <option value= "?">아이돌</option>
                    <option value= "?">화가</option>
                </Form.Select>
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
        <div className = "reset-button">
            <Button variant = "secondary" onClick = {() => setForm({
                name : '',
                writer : '',
                gender : '',
                categoryIds : '',
                description : '',
                password : '',
            })}>인물 등록</Button>
        </div>
        <div className = "register-button">
            <Button variant = "primary" onClick = {handleSubmit}>인물 등록</Button>
        </div>
    </div>
);

export default PersonRegisterForm;