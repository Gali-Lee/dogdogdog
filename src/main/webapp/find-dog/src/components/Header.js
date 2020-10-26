import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<Link to="/login">로그인페이</Link>
			<Link to="/board1">게시판1</Link>
			<Link to="/board2">게시판2</Link>
			<Link to="/board3">게시판3</Link>
			<Link to="/map">게시판4</Link>
		</div>
	);
};

export default Header;