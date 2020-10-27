
import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = (props) => {
	//state관리
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const dispatch = useDispatch();


	// 로그인
	function login(e) {
		//e.preventDefault();
		console.log(user)
		fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(user),
		})
			.then((res) => {
				console.log(1,res);
				//로컬 스토리지 저장
				for(let header of res.headers.entries()){
					if(header[0] === "authorization"){
						localStorage.setItem("Authorization",header[1]);

					}
				}
				return res.text();
			})
			.then((res) => {
				console.log(res);
				if (res === "ok") {
					alert("로그인성공");
					//로그인 상태 값 리덕스에 저장
					dispatch(login());
				props.histroy.push("/");
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