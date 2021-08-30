import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createQueryWithCondition } from '../modules/urlGenerator';
import { renderAfterApiCall } from '../modules/renderHelper';


const Page = ({curr, size, type}) => {

    const [total, setTotal] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try{   
                setTotal(null);
                setError(null);
                setLoading(null);
                
                const url = "/" + type + "/api/v1/count/all";
                const response = await axios.get(url);
                setTotal(response['count']);
            } catch(e){
                setError(e);
            }
            setLoading(true);
        }

        fetch();
    }, []);



    let last = Math.ceil(curr / 10) * 10;
    let start = last - 9;
    let realLast = Math.ceil(total / size);
    let prev, next = true;

    if(start === 1){
        prev = false;
    }
    if(last * size > total){
         next = false;
    }
    if(realLast < last){
        last = realLast;
    }

    const createPageButton = (number) => {
        return (
            <Link to = {createQueryWithCondition('page', { page : number, size : size})}>
                <Pagination.Item key = {number}>
                    {number}
                </Pagination.Item>
            </Link>
        )
    }

    const createMultiplePageButtons = () => {

        let pages;

        for(let i=start ; i <= last ; i++){
            pages += createPageButton(i);
        }

        return <>{pages}</>;
    }

    const element = (
        <Pagination>
            {prev ? 
            <Link to = {createQueryWithCondition('page', { page : start-1, size : size})}>
                <Pagination.Prev  />
            </Link>
            : null}

            {createMultiplePageButtons()}

            {next ?
            <Link to = {createQueryWithCondition('page', { page : start-1, size : size})}>
                <Pagination.Next />
            </Link>
            : null}
        </Pagination>
    );

    return renderAfterApiCall(total, error, loading, element);
}


export default Page;