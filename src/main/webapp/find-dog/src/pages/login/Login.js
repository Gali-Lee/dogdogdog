import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { login, logout } from '../../store';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const isLogin = useSelector((store)=>store.isLogin);
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		username: '',
		password: ''
	});

	const submitLogin = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(user)
		}).then(res => {
			// 로컬 스토리지 저장
			for (let header of res.headers.entries()) {
				if (header[0] === "authorization") {
					localStorage.setItem("Authorization", header[1]);
					console.log("헤더 찍힘");
					console.log(header);
				}else{
				}
			}
			return res.text();

		}).then(res => {
			if (res === "ok") {
				alert("로그인 완료");
				console.log("1111");
				// 로그인 상태 값 리덕스 저장
				dispatch(login());
				props.history.push("/");
				setUser(user.username,user.password);
			} else {
				alert('아이디 혹은 비번을 다시 입력하세요!');
			}
		});
		console.log(isLogin);
	}
	const logoutbutton = (e)=>{
		e.preventDefault();
		localStorage.removeItem("Authorization");
		dispatch(logout());
		console.log(isLogin);
	}

	const changeValue = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	}
	return (
		<div>
			<form>
				<input type="text" onChange={changeValue} value={user.name} name="username" placeholder="아이디를 입력하세요." />
				<input type="password" onChange={changeValue} value={user.password} name="password" placeholder="아이디를 입력하세요." />
				<button onClick={submitLogin}>로그인</button>
				<button ><Link to="Join">회원가입</Link></button>
				<button onClick={logoutbutton}>로그아웃</button>
				
			</form>
		</div>
	);
};

export default Login;