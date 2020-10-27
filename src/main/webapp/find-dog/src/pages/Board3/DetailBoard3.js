import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const DetailBoard3 = (props) => {
	const id = props.match.params.id;

	const history = useHistory();
	const [post, setPost] = useState({
		id: "",
		title: "",
		content: "",
		readCount: "",
		person: ""
	});

	useEffect(() => {

		fetch("http://localhost:8000/post/" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setPost(res);
			});
	}, []);

	function submitDelete(e) {
		e.preventDefault();
		console.log("삭제함수에 들어옴 ");

		fetch("http://localhost:8000/post/" + id, {
			method: "DELETE",

		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("삭제 되었습니다.");
					history.goBack();
				}
			})
	}
	return (
		<div>
			<h1>글 상세보기 페이지 입니다.</h1>
			<div>아이디 : {post.id}</div>
			<div>제목 : {post.title}</div>
			<div>내용 : {post.content}</div>
			<div>조회수 : {post.readCount}</div>
			<div>글쓴이 : {post.person.username}</div>
			<div><Link to={"/Modify/" + id}><button>수정</button></Link></div>
			<div><button onClick={submitDelete}>삭제</button></div>
		</div>
	);
};

export default DetailBoard3;