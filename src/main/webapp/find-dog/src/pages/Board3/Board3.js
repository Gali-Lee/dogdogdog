import React from 'react';
import ListBoard3 from './ListBoard3';
import { Link } from 'react-router-dom';

const Board3 = () => {
	return (
		<div>
			<ListBoard3/>
			<div>
			<Link to={"/board3/write"}><button>글쓰기</button></Link>			
			</div>
			<hr/>
		</div>
	);
};

export default Board3;