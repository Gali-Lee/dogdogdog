import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ModifyBoard3 = (props) => {

	const id = props.match.params.id;
	const history = useHistory();

	const [board3, setBoard3] = useState({
		id:"",
		catagory:"", 
		name: "", 
		bread: "", 
		age: "", 
		sex: "", 
		place: "", 
		image: "", 
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

	function inputHandle(e) {
		setBoard3({
			...board3,
			[e.target.name]: e.target.value,
		});
	}
	function submitModify(e) {
		e.preventDefault();
		console.log("submitModify() 실행");

		fetch("http://localhost:8000/board3/" + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(board3)
		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("글이 수정되었습니다.");
					history.goBack();
				}
			})
	}
	return (
		<div>
			<form>
				<input
					type="text"
					onChange={inputHandle}
					name="catagory"
					value={board3.catagory}
					placeholder="카테고리를 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="name"
					value={board3.name}
					placeholder="반려동물의 이름을 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="bread"
					value={board3.bread}
					placeholder="견종을 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="age"
					value={board3.age}
					placeholder="나이를 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="sex"
					value={board3.sex}
					placeholder="성별을 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="place"
					value={board3.place}
					placeholder="장소를 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="image"
					value={board3.image}
					placeholder="사진을 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="content"
					value={board3.content}
					placeholder="내용을 입력하세요"
				/>
				<br />
				<button onClick={submitModify}>수정</button>
			</form>
		</div>
	);
};

export default ModifyBoard3;