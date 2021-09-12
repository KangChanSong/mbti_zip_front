import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import './Comment.css';
import CommentBottom from './CommentBottom';
import { fetchItems } from '../modules/apiCaller';
import { renderAfterApiCall } from '../modules/renderHelper';
import SortSelect from '../common/select/SortSelect';

const Comment = ({type , id}) => {
    
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,  setError] = useState(null);
    
    const [sort, setSort] = useState("updateDate");
    const [dir, setDir] = useState("desc");
    const [page, setPage] = useState(1);
    const size = 10;
    
    useEffect(() => {
        const url = "/api/v1/comment/" + type + "/" + id + "/list?page=" + page 
                                + "&size=" +size + "&sort=" + sort + "&dir=" + dir;
        fetchItems(url, 'comment', setComments, setError, setLoading);
    }, [page, sort, dir]);

    const handleChange = ({ sort , dir}) => {
        setSort(sort);
        setDir(dir);
    }

    const element = (
        <div className = "comment">
            <div className = "comment-head">
                <h2>토론</h2>
                <SortSelect
                    type = 'comment'
                    sort = {sort}
                    dir = {dir}
                    handleChange = {handleChange}
                />
            </div>

            <CommentList comments = {comments} setPage = {setPage}/>
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