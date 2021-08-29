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
    
    useEffect(() => {
        const url = "/comment/api/v1/" + type + "/" + id + "/list?page=1&size=10&sort=createDate&dir=desc";
        fetchItems(url, 'comment', setComments, setError, setLoading);
    }, []);

    const element = (
        <div className = "comment">
            <h2>토론</h2>
            <CommentList comments = {comments}/>
            <CommentBottom type = {type} id = {id}/>
        </div>
    )
    
    return renderAfterApiCall(comments, error, loading, element);
}

export default Comment;