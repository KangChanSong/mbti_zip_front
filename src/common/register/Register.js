import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import changeTypeToKorean from '../TypeChanger';
import './Register.css';

// type : person 또는 job
class Register extends React.Component{
    constructor(props){
        super(props);
    }

    createPersonRegsiterForm(type){
        return (
            <div className = "register">
                <h1>{type} 등록</h1>
                <Form>
                    <Form.Group className = "mb-3">
                        <Form.Control
                            type="text"
                            name = "name"
                            placeholder = {type + " 이름을 입력하세요"} />
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
                <div className = "register-button">
                    <Button variant = "primary">{type} 등록</Button>
                </div>
            </div>
        )
    }

    createJobRegisterForm(type){
        return (
            <div className = "register">
                <h1>{type} 등록</h1>
                <Form>
                    <Form.Group className = "mb-3">
                        <Form.Control
                            type="text"
                            name = "title"
                            placeholder = {type + " 이름을 입력하세요."} />
                    </Form.Group>
                    <Form.Group className = "mb-3">
                        <Form.Control
                            type="text"
                            name ="writer"
                            placeholder = "작성자을 입력하세요." />
                    </Form.Group>
                    <Form.Group className = "mb-3">
                        <Form.Control
                        name = "image"
                        type="file" />
                        썸네일을 업로드하세요.
                    </Form.Group>
                    <Form.Group className = "mb-3">
                        <Form.Control
                            type="password"
                            name ="password"
                            placeholder = "비밀번호을 입력하세요." />
                    </Form.Group>
                </Form>
                <div className = "register-button">
                    <Button variant = "primary">{type} 등록</Button>
                </div>
            </div>
        )
    }

    render(){

        const type = changeTypeToKorean(this.props.type);

        return (
            <>
            {type === '인물' ?
             this.createPersonRegsiterForm(type)
             : this.createJobRegisterForm(type)};
            </>
            );
        
    }
}

export default Register;