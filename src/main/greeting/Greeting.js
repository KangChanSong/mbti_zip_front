import React from 'react';
import Alert from 'react-bootstrap/Alert';
import GreetingTitle from './GreetingTitle';
import GreetingContent from './GreetingContent';
import './Greeting.css';

class Greeting extends React.Component{

    render(){
        return (
            <Alert variant = "light" className = "alert-greeting" >
                <GreetingTitle />
                <GreetingContent />
            </Alert>
        )
    }
}

export default Greeting;