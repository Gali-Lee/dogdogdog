
import React, { useReducer, useState } from 'react';

const Login = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
function login(e){
	e.preventDefault();
	console.log(user)
	fetch().then().then()
}
	return (
		<div>
			<form>
				<input type="text" name="username" placeholder="아이디를 입력하세요." />
				<input type="password" name="password" placeholder="아이디를 입력하세요." />
				<button>로그인</button>
				<button>회원가입</button>
			</form>
		</div>
	);
};

export default Login;