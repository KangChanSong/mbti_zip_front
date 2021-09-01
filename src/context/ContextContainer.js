import React from 'react';

const VoteChartContext = React.createContext();

export {VoteChartContext};

const {Provider, Consumer : ContextConsumer} = VoteChartContext;

class ContextProvider extends React.Component{
    
    state = {
        value : '',
    }

    actions = {
        setValue : (value) => {
            this.setState({ value });
        }
    }

    render(){
        const { state, actions } = this;
        const value = {state, actions};
        return (
            <Provider value = {value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    ContextConsumer,
    ContextProvider,
};