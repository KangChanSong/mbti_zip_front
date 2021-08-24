import React from 'react';
import Table from 'react-bootstrap/Table';
import DeleteModal from '../modal/DeleteModal';

class CommentList extends React.Component{
    constructor(props){
        super(props);
    }

    createCommentTableRows(comments){
        return comments.map(comment => {
            return (
                <tr>
                    <td>{comment.writer}</td>
                    <td>{comment.content}</td>
                    <td>{comment.createDate}</td>
                    <td>{comment.likes}</td>
                    <td className = "comment-list-button">
                         <button>❤</button>
                    </td>
                    <td className = "comment-list-button">
                         <DeleteModal
                            text = '❌'
                            variant = 'muted'
                            size = "sm" />
                    </td>
                </tr>
            )
        })
    }

    render(){

        const comments = this.props.commentList;

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>작성일</th>
                        <th>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    {this.createCommentTableRows(comments)}
                </tbody>
            </Table>
        )
    }
}

export default CommentList;