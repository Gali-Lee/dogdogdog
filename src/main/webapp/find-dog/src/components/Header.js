import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<Link to="/login">로그인페이지</Link> <br />
			<Link to="/board1">게시판1</Link><br />
			<Link to="/board2">게시판2</Link><br />
			<Link to="/board3">게시판3</Link><br /><Link to="/map">게시판4</Link>
		</div>
	);
};

export default Header;