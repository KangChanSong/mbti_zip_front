import React from 'react';
import Greeting from './greeting/Greeting';

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Greeting />
        )
    }
}

export default Main;