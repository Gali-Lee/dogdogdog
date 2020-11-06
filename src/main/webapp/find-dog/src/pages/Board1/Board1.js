import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Board1 = () => {
	
	return (
		<div>
			<Link to={"/board1/write"}>
				<button>글쓰기</button>
			</Link>
		</div>
	);
};

export default Board1;