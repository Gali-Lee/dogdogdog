import React, { useState } from 'react';

const Join = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
		place: "",
		email: "",
	});


	function inputHandle(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
		console.log(user)
	}

	function join(e) {
		e.preventDefault();

		fetch("http://localhost:8000/joinProc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(user),
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
			<form>
				<br />
				<h2>회원 정보 입력</h2>
				<input
					type="text"
					name="username"
					onChange={inputHandle}
					value={user.username}
					placeholder="username 입력" />
				<br />

				<input
					type="password"
					name="password"
					onChange={inputHandle}
					value={user.password}
					placeholder="password 입력" />
				<br />

				<input
					type="text"
					name="place"
					onChange={inputHandle}
					value={user.place}
					placeholder="place 입력" />
				<br />

				<input
					type="text"
					name="email"
					onChange={inputHandle}
					value={user.email}
					placeholder="email 입력" />
				<br />
				<button onClick={join}>가입</button>
			</form>

		</div>
	);
};

export default Join;