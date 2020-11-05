import React from 'react';
import ListBoard3 from './ListBoard3';
import { Link } from 'react-router-dom';

const Board3 = () => {
	return (
		<div>
			<Link to={"/board3/write"}><button>글쓰기</button></Link>	
			<ListBoard3/>
			<div>
					
			</div>
			<hr/>
		</div>
	);
};

export default Board3;