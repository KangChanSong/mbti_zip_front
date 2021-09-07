import React from 'react';

import Page from '../common/Page';
import CommentRegisterModal from '../modal/CommentRegisterModal';
const CommentBottom = ({ type, id, page, setPage}) => {

    return (
        <>
        <div className = "comment-bottom">
            <div></div>
            <Page 
                curr = {page}
                type = {'comment/' + type + "/" + id }
                size = '10'
                setPage = {setPage}/>
            <CommentRegisterModal 
                type = {type} 
                id = {id}
                setPage = {setPage}/>
        </div>
        
        </>
    )
}

export default React.memo(CommentBottom);