import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';


const Header = () => {
	const isLogin = useSelector((store) => store.isLogin);
	const user = localStorage.getItem("user")
	const dispatch = useDispatch();

	const logoutbutton = (e) => {
		e.preventDefault();
		localStorage.removeItem("Authorization");
		localStorage.removeItem("user");
		dispatch(logout());
		console.log(isLogin);
	}

	return (
		<div>
			<Link to="/login">로그인페이지</Link><br/>
			<Link to="/board1">게시판1</Link><br/>
			<Link to="/board2">게시판2</Link><br/>
			<Link to="/board3">게시판3</Link><br/>
			<Link to="/map">지도</Link>

			{isLogin ?
				(
					<>
						<h2>{user}님 환영합니다!!!!!!!!!!!!!!!!!!!!!!!</h2>
						<Link to="/joindog">강아지 등록</Link>
						<button onClick={logoutbutton}>로그아웃</button>
					</>
				)
				:
				(
					<>
						<h2> 로그아웃 됨</h2>

						<Link to="/login">로그인</Link>
					</>
				)
			}
		</div>

	);
};

export default Header;