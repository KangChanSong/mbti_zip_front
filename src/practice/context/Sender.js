import React, { Component } from 'react';
import { ContextConsumer } from '../../context/ContextContainer';

class Sender extends Component{

    state = {
        input : '',
    }

    componentDidMount(){
        this.setState({
            input : this.props.value,
        })
    }

    handleChange = (e) => {
        this.setState({ input : e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setValue(this.state.input);
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input value = {this.state.value} onChange = {this.handleChange} ></input>
                <button type = "submit">설정</button>
            </form>
        )
    }
}

const SenderContainer = () => (
    <ContextConsumer>
        {
            ({state, actions}) => (
                <Sender
                    value = {state.value}
                    setValue = {actions.setValue}
                />
            )
        }
    </ContextConsumer>
);

export default SenderContainer;