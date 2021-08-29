import React from 'react';

import Page from '../common/Page';
import CommentRegisterModal from '../modal/CommentRegisterModal';
const CommentBottom = ({ type, id}) => {

    return (
        <div className = "comment-bottom">
            <div></div>
            <Page />
            <CommentRegisterModal type = {type} id = {id}/>
        </div>
    )
}

export default CommentBottom;