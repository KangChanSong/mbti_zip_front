import axios from 'axios';

export const fetchItems = (url, type, setItem, setError, setLoading) => {

    const types = {
        person : 'personGetDtos',
        job : 'jobGetDtos',
        mbti: 'mbtiGetDtos',
        comment : 'commentGetDtos',
        category : 'categoryGetDtos',
    };

    const functions = {
        setItem : setItem,
        setError : setError,
        setLoading : setLoading
    };

    handleRequest(() => axios.get(url), functions, types[type]);
}

export const fetchOne = (url, setItem, setError, setLoading) => {

    const functions = {
        setItem : setItem,
        setError : setError,
        setLoading : setLoading
    };

    handleRequest(() => axios.get(url), functions, '');
}

export const postOne = (url, data, setItem, setError, setLoading) => {

    const request = () => axios.post(url, data);

    const functions = {
        setItem : setItem,
        setError : setError,
        setLoading : setLoading
    };

    handleRequest(request, functions, 'isSuccess');
}

const handleRequest = async (request, functions, dataString) => {

    const setItem = functions.setItem;
    const setError = functions.setError;
    const setLoading = functions.setLoading;

    try{
        setItem(null);
        setError(null);
        setLoading(true);

        const response = await request();
        
        if(dataString === ''){
            setItem(response.data);
        } else {
            setItem(response.data[dataString]);
        }

    }catch (e){
        setError(e);
    }

    setLoading(false);
    
}