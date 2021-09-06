import { useEffect, useState } from 'react';
import { fetchOne } from '../modules/apiCaller';

const useFetchOne = (url) => {

    const [data , setData] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchOne(url, setData, setError, setLoading);
    }, []);

    return [data , loading, error];
}

export default useFetchOne;