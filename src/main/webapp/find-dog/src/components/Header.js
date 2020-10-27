import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Link to="/login">로그인페이지</Link>
			<Link to="/board1">게시판1</Link>
			<Link to="/board2">게시판2</Link>
			<Link to="/board3">게시판3</Link>
		</div>

	);
};

export default Header;