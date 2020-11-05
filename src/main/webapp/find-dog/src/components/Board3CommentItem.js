import React from 'react';

const Board3CommentItem = (props) => {
	const {id, content, board3Id, userId} = props.comment;
	return (
		<div>
			<div>{userId}</div>
			<div>{content}</div>
		</div>
	);
};

export default Board3CommentItem;