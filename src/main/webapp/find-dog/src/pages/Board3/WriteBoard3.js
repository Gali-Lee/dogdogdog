import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const WriteBoard3 = () => {
	const history = useHistory();

	const [board3, setBoard3] = useState({
		id: "",
		catagory: "",
		name: "",
		bread: "",
		age: "",
		sex: "",
		place: "",
		image: "",
		content: ""
	});

	function onSeletedImg(e) {
		console.log(e.target.files);
	}

	function inputHandle(e) {
		setBoard3({
			...board3,
			[e.target.name]: e.target.value,
		});
	}
	function submitPost(e) {
		e.preventDefault();
		console.log("submitPost() 실행");

		fetch("http://localhost:8000/board3/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(board3)
		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("글이 등록되었습니다.");
					history.goBack();
				}
			})
	}

	return (
		<div>
			<form>
				<select
					name="catagory"
					value={board3.catagory}
					onChange={inputHandle}>
					<option value="실종">실종</option>
					<option value="제보">제보</option>
				</select>
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
					type="file" multiple
					accept="image/jpeg, image/jpg"
					onChange={onSeletedImg}
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
				<button onClick={submitPost}>등록</button>
			</form>
		</div>
	);
};

export default WriteBoard3;