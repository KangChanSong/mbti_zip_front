import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import { splitUrlWithQueryObject } from '../modules/urlGenerator';


const Page = ({curr, size, totalAmount}) => {

    const last = Math.ceil(curr / 10) * 10;
    const start = lastPage - 9;
    const realLast = Math.ceil(totalAmount / size);
    const prev, next = true;

    if(start === 1){
        prev = false;
    }
    if(last * size > amount){
         next = false;
    }
    if(realLast < lastPage){
        lastPage = realLast;
    }


    const createPageButton = (number) => {
        return (
            <Link to = {() => splitUrlWithQueryObject('page', { page : number, size : size})}>
                <Pagination.Item key = {number}>
                    {number}
                </Pagination.Item>
            </Link>
        )
    }

    const createMultiplePageButtons = () => {

        let pages;

        for(i=start ; i <= last ; i++){
            pages += <createPageButton number = {i}/>
        }

        return <>{pages}</>;
    }

    return (
        <Pagination>
            {prev ? <Pagination.Prev /> : null}
            {createMultiplePageButtons()}
            {next ? <Pagination.Next /> : null}
        </Pagination>
    );

}

export default Page;