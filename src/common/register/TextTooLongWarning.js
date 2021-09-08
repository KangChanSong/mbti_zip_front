import React from 'react';

const TextTooLongWarning = ({ name }) => {
    if(name && (name.length > 15) ){
     return <span style = {{ color : 'red', fontSize : '11px'}}>
                15자 이하로 적어주세요.
            </span>
    } else {
        console.log(name);
        return <></>;
    }
    
}

export default TextTooLongWarning;