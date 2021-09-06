
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExistsWarning = ({ url, form ,setForm }) => {

    const [exists, setExists] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(url);
            const isExists = response.data;
            setExists(isExists);
            if(isExists){
                setForm({
                    ...form,
                    name : '',
                })
            }
        }
        fetch();
    }, [url])
    
    return (
        <span 
        style = {{ color : 'red', fontSize : '11px', padding: '0', margin : '0'}}>
             { exists ? "이미 존재하는 이름입니다." : ''} 
        </span>
    )
}

export default ExistsWarning;
