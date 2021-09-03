import React, { useEffect, useState } from 'react';
import { fetchOne } from '../modules/apiCaller';
import axios from 'axios';

export const useFetchOne = (url) => {

    const [data , setData] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchOne(url, setData, setError, setLoading);
    }, []);

    return [data , loading, error];
}