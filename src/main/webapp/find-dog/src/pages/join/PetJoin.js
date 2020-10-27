import React, { useState } from 'react';

const PetJoin = () => {


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

		fetch("http://localhost:8000/petJoinProc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(dog),
		})
			.then((res) => res.text())
			.then((res) => {
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

export default PetJoin;