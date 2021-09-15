import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{

    render(){
        return (
            <Alert variant="secondary" className ="d-flex justify-content-center"
                style = {{ margin : '0'}}>
                <p className = "p-3" style = {{fontSize : '12px',  color : "black"}}>© KangChanSong</p> 
                <Alert.Link className = "p-3" href="https://github.com/KangChanSong">
                    <FontAwesomeIcon icon={faGithub}/>
                </Alert.Link>
            </Alert>
        )
    }
}

export default Footer;