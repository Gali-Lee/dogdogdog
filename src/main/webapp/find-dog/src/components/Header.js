import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Navbar, Nav } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar/Sidebar';

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
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand Link to="/">DOG</Navbar.Brand>
				<Nav className="mr-auto">

				</Nav>
				 <Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					{isLogin ?
						(
							<>
								<h2>{user}님 환영합니다!</h2>
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
				</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>

		</div>

	);
};

export default Header;