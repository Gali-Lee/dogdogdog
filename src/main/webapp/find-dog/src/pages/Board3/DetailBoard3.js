import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const DetailBoard3 = (props) => {
	const id = props.match.params.id;
	const history = useHistory();

	const [board3, setBoard3] = useState({
		id: "",
		catagory: "",
		name: "",
		bread: "",
		age: "",
		sex: "",
		place: "",
		// image1: "",
		// image2: "",
		content: ""
	});

	useEffect(() => {

		fetch("http://localhost:8000/board3/" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setBoard3(res);
			});
	}, []);

	function submitDelete(e) {
		e.preventDefault();
		console.log("submitDelete() 실행");

		fetch("http://localhost:8000/board3/" + id, {
			method: "DELETE",

		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("삭제 되었습니다.");
					history.push("/board3");
				}
			})
	}
	return (
		<div>
			<h1>글 상세보기 페이지 입니다.</h1>
			<div>번호 : {board3.id}</div>
			<div>카테고리 : {board3.catagory}</div>
			<div>반려동물 이름 : {board3.name}</div>
			<div>견종 : {board3.bread}</div>
			<div>나이 : {board3.age}</div>
			<div>성별 : {board3.sex}</div>
			<div>장소 : {board3.place}</div>
			<img src={"\\src\\images\\"+board3.image1} alt="" height="200px" />
			<img src={"\\src\\images\\"+board3.image2} alt="" height="200px" />
			<div>내용 : {board3.content}</div>
			<div><Link to={"/wanted/" + id}><button>전단지만들기</button></Link></div>
			<div><Link to={"/board3/modify/" + id}><button>수정</button></Link></div>
			<div><button onClick={submitDelete}>삭제</button></div>
		</div>
	);
};

export default DetailBoard3;