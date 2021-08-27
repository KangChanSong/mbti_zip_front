import React from 'react';

export const renderAfterApiCall = (items, error, loading, element) => {

    if(loading){
        return <h1>로딩중..</h1>
    }
    if(error){
        return <h1>{error.toString()}</h1>
    }
    if(!items){
        return <h1>아무것도 없습니다.</h1>
    }
    return element;
}