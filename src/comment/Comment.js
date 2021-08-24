import React from 'react';
import CommentList from './CommentList';
import './Comment.css';
import CommentBottom from './CommentBottom';
class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        
        const commentList = [
            {writer : 'aa' , content: 'Nono', createDate : '2021-09-21', likes : 6},
            {writer : 'aasdsa' , content: 'Nondfffo', createDate : '2021-09-21', likes : 6},
            {writer : 'asdasaa' , content: 'Nondfdfo', createDate : '2021-09-21', likes : 6},
            {writer : 'aa' , content: 'Nasdono', createDate : '2021-09-21', likes : 6},
            {writer : 'adasdasa' , content: 'Nondfadfadfafdo', createDate : '2021-09-21', likes : 23},
            {writer : 'asdsda' , content: 'Nodfdfno', createDate : '2021-09-21', likes : 6},
            {writer : 'aa' , content: 'Nodfdfdafadfadfano', createDate : '2021-09-21', likes : 44},
            {writer : 'asda' , content: 'Nono', createDate : '2021-09-21', likes : 6},
            {writer : 'aa' , content: 'Noadfadfno', createDate : '2021-09-21', likes : 12},
            {writer : 'sdaa' , content: 'Nodfdfdno', createDate : '2021-09-21', likes : 6},
            
        ]

        return (
            <div className = "comment">
                <h2>토론</h2>
                <CommentList commentList = {commentList}/>
                <CommentBottom />
            </div>
        )
    }
}

export default Comment;