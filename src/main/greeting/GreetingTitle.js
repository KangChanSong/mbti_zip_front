import React from 'react';
import Alert from 'react-bootstrap/Alert';

class GreetingTitle extends React.Component{
    render(){
        return (
            <Alert.Heading className = 'p-2'>
                MBTI-ZIP 에 오신것을 환영합니다! 🙌
            </Alert.Heading >
        )
    }
}

export default GreetingTitle;