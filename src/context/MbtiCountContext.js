import React from 'react';

const VoteChartContext = React.createContext();

const {Provider, Consumer : VoteChartConsumer} = VoteChartContext;

class VoteChartProvider extends React.Component{
    
    state = {
        value : '기본값입니다.',
    }

    actions = {
        setValue : (value) => {
            this.setState({ value });
        }
    }

    render(){
        const { state, action } = this;
        const value = {state, action};
        return (
            <Provider value = {value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    VoteChartConsumer,
    VoteChartProvider,
};