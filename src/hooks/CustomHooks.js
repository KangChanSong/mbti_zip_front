import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchOne } from '../modules/apiCaller';

export const useFetchOne = (url) => {

    const [data , setData] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchOne(url, setData, setError, setLoading);
    }, []);

    return [data , loading, error];
}

export const useFetchList = (url) => {

    const [data , setData] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchList = async () => {
            try{
                setData(null);
                setError(null);
                setLoading(true);

                const response = await axios.get(url);

                setData(response['data']);
            } catch(e){
                setError(e);
            }
            setLoading(false);
        }

        fetchList();
    }, []);

    return [data, loading, error];
}