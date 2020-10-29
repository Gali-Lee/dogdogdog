import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

	const isLogin = useSelector((store) => store.isLogin);
	return (
		<div>
			<Link to="/login">로그인페이지</Link>
			<Link to="/board1">게시판1</Link>
			<Link to="/board2">게시판2</Link>
			<Link to="/board3">게시판3</Link>

			{isLogin ?
				(
					<>
						<h2> 로그인 됨</h2>
						<Link to="/joindog">강아지 등록</Link>
					</>
				)
				:
				(
					<>
						<h2> 로그아웃 됨</h2>
					</>
				)
			}
		</div>

	);
};

export default Header;