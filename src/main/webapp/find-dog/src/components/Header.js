import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Navbar, Nav } from 'react-bootstrap';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';


const Header = () => {
	const isLogin = useSelector((store) => store.isLogin);
	const user = localStorage.getItem("user")
	const dispatch = useDispatch();
const { SubMenu } = Menu;
	const logoutbutton = (e) => {
		e.preventDefault();
		localStorage.removeItem("Authorization");
		localStorage.removeItem("user");
		dispatch(logout());
		console.log(isLogin);
	}

	return (

		<div>
			<div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" ><Link to="board1">게시판1</Link></Menu.Item>
        <Menu.Item key="2"><Link to="board2">게시판 2</Link></Menu.Item>
        <Menu.Item key="3"><Link to="board3">게시판 3</Link></Menu.Item>
		<Menu.Item key="4"><Link to="login">로그인</Link></Menu.Item>
      </Menu>




			{/* <Navbar bg="primary" variant="dark">
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
			</Navbar> */}

		</div>

	);
};

export default Header;