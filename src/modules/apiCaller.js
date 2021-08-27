import axios from 'axios';

export const fetchItems = async (url, type, setItem, setError, setLoading) => {

    const types = {
        person : 'personGetDtos',
        job : 'jobGetDtos',
        mbti: 'mbtiGetDtos',
    };

    try{
        setItem(null);
        setError(null);
        setLoading(true);

        const response = await axios.get(url);
        
        setItem(response.data[types[type]]);

    }catch (e){
        setError(e);
    }

    setLoading(false);
}

export const fetchOne = async (url, setItem, setError, setLoading) => {

    try{
        setItem(null);
        setError(null);
        setLoading(true);

        const response = await axios.get(url);
        
        setItem(response.data);

    }catch (e){
        setError(e);
    }

    setLoading(false);
}
