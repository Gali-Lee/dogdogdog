import React from 'react';

const Board3CommentItem = (props) => {

	const comment = props.comment;
	const submitCommentDelete = props.submitCommentDelete;

	return (
		<div>
			<div>사용자{comment.user.username}</div>
			<div>댓글 내용 {comment.content}</div>
			<div>
				{comment.user.username === localStorage.user ?
					<button onClick={() => submitCommentDelete(comment.id)}>삭제 </button>
					: null}
			</div>
		</div>
	);
};

export default Board3CommentItem;