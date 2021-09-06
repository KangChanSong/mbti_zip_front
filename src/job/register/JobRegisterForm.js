import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageForm from '../../common/register/ImageForm';
import ExistsWarning from '../../common/register/ExistsWarning';

const JobRegisterForm = ( { form , setForm , handleSubmit, handleChange } ) => {

    const [name, setName] = useState(null);
    
    const onBlur = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return(
        <div className = "register">
            <h1>직업 등록</h1>
            <Form onChange = {handleChange}>
                <Form.Group className = "mb-3">
                    <Form.Control
                        type="text"
                        name = "title"
                        placeholder = {"직업 이름을 입력하세요."} 
                        onBlur = {onBlur}/>
                    <ExistsWarning 
                        url = {"/job/api/v1/exists/" + name}
                        form = {form}
                        setForm = {setForm}
                    />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <Form.Control
                        type="text"
                        name ="writer"
                        placeholder = "작성자를 입력하세요." />
                </Form.Group>
                <Form.Group>
                    <ImageForm form = {form} setForm = {setForm} />
                </Form.Group>
                <Form.Group className = "mb-3">
                    <Form.Control
                        type="password"
                        name ="password"
                        placeholder = "비밀번호를 입력하세요." />
                </Form.Group>
            </Form>
            <div className = "register-button">
                <Button variant = "primary" onClick = {handleSubmit}> 등록</Button>
            </div>
        </div>
    )
}

export default JobRegisterForm;