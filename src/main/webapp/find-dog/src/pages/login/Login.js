
import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	//state관리
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	// 로그인
	function login(e) {
		e.preventDefault();
		console.log(user)
		fetch("http://localhost:8000/loginProc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.text())
			.then((res) => {
				console.log(res);
				if (res === "ok") {
					alert("로그인성공");
				} else {
					alert("로그인실패");
				}
			});
	}

	function inputHandle(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
		console.log(user)
	}
	return (
		<div>
			<form>
				<input type="text" onChange={inputHandle} value={user.name} name="username" placeholder="아이디를 입력하세요." />
				<input type="password" onChange={inputHandle} value={user.password} name="password" placeholder="아이디를 입력하세요." />
				<button onClick={login}>로그인</button>
				<button ><Link to="Join">회원가입</Link></button>
			</form>
		</div>
	);
};

export default Login;