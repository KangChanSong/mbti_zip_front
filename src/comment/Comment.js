import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import './Comment.css';
import CommentBottom from './CommentBottom';
import { fetchItems } from '../modules/apiCaller';
import { renderAfterApiCall } from '../modules/renderHelper';

const Comment = ({type , id}) => {
    
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,  setError] = useState(null);
    
    const [sort, setSort] = useState("createDate");
    const [dir, serDir] = useState("desc");
    const [page, setPage] = useState(1);
    const size = 10;
    
    useEffect(() => {
        const url = "/comment/api/v1/" + type + "/" + id + "/list?page=" + page 
                                + "&size=" +size + "&sort=" + sort + "&dir=" + dir;
        fetchItems(url, 'comment', setComments, setError, setLoading);
    }, [page]);

    const element = (
        <div className = "comment">
            <h2>토론</h2>

            <CommentList comments = {comments}/>
            <CommentBottom 
                type = {type} 
                id = {id}
                page = {page}
                setPage = {setPage}
                setComments = {setComments} />
        </div>
    )
    
    return renderAfterApiCall(comments, error, loading, element);
}

export default React.memo(Comment);