import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './renderHelper.css';

export const Loading = () => {

        const [speed, setSpeed] = useState(3);

        return (
            <div 
                className = "loading"
                style = {{
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                    flexDirection : 'column',
                    width : '100%',
                    height : '100%',
                    padding : '20%'}}
                >
                <FontAwesomeIcon 
                    icon = {faSpinner}
                    size = "6x" 
                    style = {{animation: `spin ${speed}s linear infinite`}}
                />
                <span
                    style = {{
                        fontSize : '24px',
                        padding : '10%',
                    }}
                    className = "loading-text"
                >
                    로딩중...
                </span>
            </div>
        )
}

export const Error = () => {

}

export const NotFound = () => {

}

export const renderAfterApiCall = (items, error, loading, element) => {

    const loadingElement = <h1>로딩중..</h1>;
    const errorElement = () => <h1>{error.toString()}</h1>;
    const notFoundElement = <h1>아무것도 없습니다.</h1>;

    if(loading){
        return <Loading />;
    }
    if(error){
        return errorElement();
    }
    return element;
}