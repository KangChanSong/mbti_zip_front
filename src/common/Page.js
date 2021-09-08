import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createQueryWithCondition } from '../modules/urlGenerator';
import './Page.css';

const makePage = (curr, size, total) => {
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

    return [start, last, prev, next];
}

const PageButton = ({ number, size, curr, setPage }) => {
    return (
            <Pagination.Item active = { number == curr} >
                <Link
                    to = {createQueryWithCondition('page', { page : number, size : size})}
                                onClick = {() => setPage(number)}>
                    {number}
                </Link>
            </Pagination.Item>
    )
        
}


const Page = ({curr, size, type, setPage}) => {

    const [total, setTotal] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try{    
                setError(null);
                setLoading(null);
                
                const url = "/" + type + "/api/v1/count/all";
                const response = await axios.get(url);
                setTotal(response.data['count']);
            } catch(e){
                setError(e);
            }
            setLoading(false);
        }

        fetch();

        return () => setLoading(false);
    }, []);

    const [start, last, prev, next] = makePage(curr, size, total);

    const PageButtonList = () => {

        let pages = [];
        for(let i = start ; i <= last ; i++){
            pages.push(
                <PageButton
                    key = {i}
                    number = {i}
                    curr = {curr}
                    size = {size}
                    setPage = {setPage}/>
            )
        }

        return pages;
    }

    if(error){
        return (<Pagination>
            <p>페이지 불러오는 중 에러 발생 : {error}</p>
        </Pagination>);
    }
    if(loading){
        return (<Pagination>
            <p>페이지 버튼을 불러오는 중입니다...</p>
        </Pagination>);
    }

    return  (
        <Pagination>
            {prev ? 
            <Link to = {createQueryWithCondition('page', { page : start-1, size : size})}>
                <Pagination.Prev  />
            </Link>
            : <> </>}

            {<PageButtonList />}

            {next ?
            <Link to = {createQueryWithCondition('page', { page : start+1, size : size})}>
                <Pagination.Next />
            </Link>
            : <> </>}
        </Pagination>
    );
}


export default React.memo(Page);