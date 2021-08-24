import React from 'react';
import Form from 'react-bootstrap/Form';
import provideMbtis  from '../common/MbtiArrayProvider';
import Button from 'react-bootstrap/Button';
import './Vote.css';

class VoteForm extends React.Component{
    constructor(props){
        super(props);
    }

    createMbtiOptions(mbtis){

        return mbtis.map(mbti => {
            let name = mbti['name'];
            return (
                <option value={name.toLowerCase()}>
                    {name}
                </option>
            )
        })
    }

    render(){

        const mbtis = provideMbtis();

        return (
            <Form className = "vote-form" >
                <Form.Select className = "vote-form-select">
                    <option>MBTI</option>
                    {this.createMbtiOptions(mbtis)}
                </Form.Select>
                <Button variant = "primary" className = "vote-from-button">
                    투표하기
                </Button>
            </Form>
        )
    }
}

export default VoteForm;