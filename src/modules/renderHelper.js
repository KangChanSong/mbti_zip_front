import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './renderHelper.css';

const element = (icon, text) => (
    <div 
    className = "warn"
    style = {{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        width : '100%',
        height : '100%',
        padding : '10%'}}
    >
    {icon}
    <span
        style = {{
            fontSize : '24px',
            padding : '10%',
        }}
        className = "loading-text"
    >
        {text}
    </span>
</div>
)
export const Loading = () => {

        const [speed, setSpeed] = useState(3);
        
        const icon = <FontAwesomeIcon 
                        icon = {faSpinner}
                        size = "6x" 
                        style = {{animation: `spin ${speed}s linear infinite`}}
                    />

        const text = "로딩중..."

        return element(icon, text);
}

export const Error = ({ error }) => {

    const icon = <FontAwesomeIcon 
                    icon = {faExclamationCircle}
                    size = "6x" />
    const text = "에러 발생 : " + error;
    return element(icon, text);
}



export const NotFound = () => {

    return element(null , '결과가 없습니다. 😓');
}

export const renderAfterApiCall = (items, error, loading, element) => {

    if(error){
        return <Error error = {error}/>;
    }
    if(loading){
        return <Loading />;
    }
    if(!items){
        return <NotFound />;
    }
    return element;
}


export const NoItemFound = ({ type }) => (
    <div
        style = {{ width : '100%', height : '100%', textAlign : 'center', fontSize : '24px'}}>
        아직 등록된 {type}이 없어요. 😥
    </div>
)