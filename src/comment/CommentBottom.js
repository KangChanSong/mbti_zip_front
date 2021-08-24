import React from 'react';

import Page from '../common/Page';
import CommentRegisterModal from '../modal/CommentRegisterModal';
class CommentBottom extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "comment-bottom">
                <div></div>
                <Page />
                <CommentRegisterModal />
            </div>
        )
    }
}

export default CommentBottom;