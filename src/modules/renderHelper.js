import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './renderHelper.css';

const Icon = ({ icon }) => (
    <FontAwesomeIcon 
        icon = {icon}
        size = "6x" 
    />
)

const SpinningIcon = ({ icon }) => {
    const [speed, setSpeed] = useState(3);
    return (
        <FontAwesomeIcon 
            icon = {icon}
            size = "6x" 
            style = {{animation: `spin ${speed}s linear infinite`}}
        />
    )
}

export const element = (icon, text) => (
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
        const text = "로딩중..."

        return element(<SpinningIcon icon = {faSpinner} />, text);
}

export const Error = ({ error }) => {    
    const text = "에러 발생 : " + error;
    if(error.includes("404")) text = "404 리소스를 찾지 못했습니다.";
    if(error.includes("500")) text = "500 서버 오류입니다. 빠르게 조치하겠습니다!";

    return element(<Icon icon = {faExclamationCircle} />, text);
}



export const NotFound = () => {

    return element(null , '결과가 없습니다. 😓');
}

export const NotFound404 = () => {
    return element(<Icon icon = {faExclamationCircle} />, "404 리소스를 찾을 수 없습니다.")
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