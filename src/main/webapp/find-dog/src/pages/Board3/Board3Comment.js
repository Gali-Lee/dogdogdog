import React, { useState, useEffect } from 'react';
import Board3CommentItem from '../../components/Board3CommentItem';

const Board3Comment = (props) => {

	const id = props.id;

	//가져올 댓글 선언
	const [comments, setComments] = useState([]);

	//등록할 댓글 초기화
	const [commentInput, setCommentInput] = useState({
		id: "",
		content: "",
		boardId: "",
		userId: ""
	});

	//해당하는 게시글의 댓글 그려줌
	useEffect(() => {
		fetch("http://localhost:8000/board3/{board3Id}/comment" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setComments(res);
			});
	}, []);

	function inputHandle(e) {
		setCommentInput((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}

	//댓글 등록
	function submitCommentWrite(e) {
		e.preventDefault();

		console.log("submitCommentWrite() 실행");
		
		fetch("http://localhost:8000/board3/"+id+"/comment/write", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization"),
			},
			body: JSON.stringify(commentInput)	

		}).then((res) => {res.json();
			console.log(res);
		})
			.then((res) => {
				if (res === "ok") {
					alert("댓글이 등록되었습니다.");
				}
				else {
					alert("댓글등록실패");
				}
			});
	}

	return (
		<div>
			<form>
				<h1>댓글 관리</h1>
				<input type="text"
					onChange={inputHandle}
					name="content"
					value={commentInput.content} />
				<button onClick={submitCommentWrite}>댓글 등록</button>
			</form>
			{/* <div>
				{comments.map((comment) => (
					<Board3CommentItem key={comment.id} comment={comment} />
				))}
			</div> */}
		</div>
	);
};

export default Board3Comment;