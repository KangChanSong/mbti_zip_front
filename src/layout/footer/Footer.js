import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{

    render(){
        return (
            <Alert variant="success" className ="d-flex justify-content-center">
                <p className = "p-3">© KangChanSong</p> 
                <Alert.Link className = "p-3" href="https://github.com/KangChanSong">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </Alert.Link>
            </Alert>
        )
    }
}

export default Footer;