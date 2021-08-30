import React from 'react';

export const renderAfterApiCall = (items, error, loading, element) => {

    const loadingElement = <h1>로딩중..</h1>;
    const errorElement = () => <h1>{error.toString()}</h1>;
    const notFoundElement = <h1>아무것도 없습니다.</h1>;

    if(loading){
        return loadingElement;
    }
    if(error){
        return errorElement();
    }
    if(!items){
        return notFoundElement;
    }
    return element;
}