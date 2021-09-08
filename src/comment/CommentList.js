import React from 'react';
import Table from 'react-bootstrap/Table';
import DeleteModal from '../modal/DeleteModal';

const Comment = ({ comment }) => {

    const formatDate = () => {
        let date = new Date(comment.updateDate);
        return date.toLocaleString();
    }

    return (
        <tr key = {comment.id}>
            <td>{comment.writer}</td>
            <td>{comment.content}</td>
            <td>{formatDate()}</td>
            <td className = "comment-list-button">
                    <DeleteModal
                    text = '❌'
                    type = "comment"
                    size = "sm"
                    id = {comment.id}
                    />
            </td>
        </tr>
    );
}

const Comments = ({ comments }) => {
    if(!comments || comments.length === 0) {
        return (
            <tr>
                <td colSpan = "3">아직 작성된 댓글이 없습니다.</td>
            </tr>
        )
    }
    return comments.map(comment => {
        return (
            <Comment key = {comment.id} comment = {comment} />
        )
    })
}

const CommentList = ({ comments}) => {

    console.log(comments);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style = {{ width : "20%"}}>작성자</th>
                    <th style = {{ width : "60%"}}>내용</th>
                    <th style = {{ width : "20%"}}>작성일</th>
                </tr>
            </thead>
            <tbody>
                <Comments
                    comments = {comments}
                />
            </tbody>
        </Table>
    )
}

export default React.memo(CommentList);