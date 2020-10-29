import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const DogJoin = (props) => {
	const username = useSelector((Join)=>Join.username);

	const [dog, setDog] = useState({
		name: "",
		catagory: "",
		age: "",
		sex: "",
		image: "",
	});

	function inputHandle(e) {
		setDog({ ...dog, [e.target.name]: e.target.value });
		console.log(dog)
	}

	function petJoin(e) {
		e.preventDefault();

		fetch("http://localhost:8000/dogJoinProc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
			},
			body: JSON.stringify(dog),
		})
			.then((res) => res.text())
			.then((res) => {
				console.log("33",username);
				console.log("22", res);
				if (res === "ok") {
					alert("가입 성공");
				} else {
					alert("가입 실패");
				}
			});
	}

	return (
		<div>
			<h2>강아지 정보 입력</h2>
			<form>
				<input
					type="text"
					name="name"
					onChange={inputHandle}
					value={"username"}
					placeholder="name 입력" />
				<br />

				<input
					type="text"
					name="name"
					onChange={inputHandle}
					value={dog.name}
					placeholder="name 입력" />
				<br />

				<input
					type="text"
					name="age"
					onChange={inputHandle}
					value={dog.age}
					placeholder="age입력" />
				<br />

				<input
					type="text"
					name="catagory"
					onChange={inputHandle}
					value={dog.catagory}
					placeholder="catagory 입력" />
				<br />

				<input
					type="text"
					name="sex"
					onChange={inputHandle}
					value={dog.sex}
					placeholder="sex 입력" />
				<br />

				<input
					type="text"
					name="image"
					onChange={inputHandle}
					value={dog.image}
					placeholder="image 입력" />
				<br />

				<button onClick={petJoin}>가입</button>
			</form>
		</div>
	);
};

export default DogJoin;