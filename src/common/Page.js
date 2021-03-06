import React, { useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { createQueryWithCondition } from '../modules/urlGenerator';
import { useLocation } from 'react-router';
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

    const location = useLocation();

    const getKeywordQuery = () => {
        
        const searchParams = new URLSearchParams(location.search);

        const filterBy = searchParams.get("filterBy");
        const keyword = searchParams.get("keyword")

        if(!filterBy || !keyword){
            return "";
        } 

        return "?filterBy=" + filterBy + "&keyword=" + keyword;

    }

    useEffect(() => {
        const fetch = async () => {
            try{    
                setError(null);
                setLoading(null);
                
                console.log("Page.js params => " + getKeywordQuery());
                const url = "/api/v1/" + type + "/count/all" + getKeywordQuery();
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
            <p>????????? ?????? ???????????? ??? ?????? ?????? : {error}</p>
        </Pagination>);
    }
    if(loading){
        return (<Pagination>
            <p>????????? ????????? ???????????? ????????????...</p>
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