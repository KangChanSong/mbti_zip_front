import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageForm from '../../common/register/ImageForm';
import CategoryList from '../../category/list/CategoryList';
import ExistsWarning from '../../common/register/ExistsWarning';
import TextTooLongWarning from '../../common/register/TextTooLongWarning';
    
const PersonRegisterForm = ( {form, setForm , handleChange, handleSubmit} ) => 
{      
    const [name, setName] = useState(null);
    const [desc , setDesc] = useState(null);

    const onBlur = e => {
        const name = e.target.value;
        setName(e.target.value);
    }

    const handleDescChange = e => {
        const desc = e.target.value;
        setDesc(desc);
    }

    return (
        <div className = "register">
            <h1>인물 등록</h1>
            <Form onChange = {handleChange}>
                <Form.Group className = "mb-3">
                    <Form.Control
                        type="text"
                        name = "name"
                        placeholder = "인물 이름을 입력하세요"
                       onBlur = {onBlur}
                        />
                <ExistsWarning
                    url = {"/api/v1/person/exists/" + name}
                    form = {form}
                    setForm = {setForm} />
                <TextTooLongWarning name = {name}/>
                </Form.Group>
                <Form.Group className = "mb-3">
                    <Form.Control
                    name = "writer"
                    type="text"
                    placeholder = "작성자를 입력하세요." />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <ImageForm form = {form} setForm = {setForm} /> 
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
                    placeholder = "설명을 입력하세요."
                    onChange = {handleDescChange} />
                </Form.Group>
                <TextTooLongWarning name = {desc} />
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

export default React.memo(PersonRegisterForm);