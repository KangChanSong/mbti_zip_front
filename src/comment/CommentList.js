import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';
import DeleteModal from '../modal/DeleteModal';

const CommentList = ({ comments}) => {
    const createCommentTableRows = (comments) => {
        if(!comments || comments.length === 0) {
            return (
                <tr>
                    <td colSpan = "3">아직 작성된 댓글이 없습니다.</td>
                </tr>
            )
        }
        return comments.map(comment => {
            return (
                <tr key = {comment.id}>
                    <td>{comment.writer}</td>
                    <td>{comment.content}</td>
                    <td>{comment.createDate}</td>
                    <td className = "comment-list-button">
                         <button>❤ {comment.likes}</button>
                    </td>
                    <td className = "comment-list-button">
                         <DeleteModal
                            text = '❌'
                            variant = 'muted'
                            size = "sm"
                            id = {comment.id}
                            />
                    </td>
                </tr>
            )
        })
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th >작성자</th>
                    <th >내용</th>
                    <th >작성일</th>
                </tr>
            </thead>
            <tbody>
                {createCommentTableRows(comments)}
            </tbody>
        </Table>
    )
}

export default CommentList;