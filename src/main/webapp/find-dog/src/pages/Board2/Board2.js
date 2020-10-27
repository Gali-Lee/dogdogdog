import React, { useEffect, useState } from 'react';


const Board2 = () => {

	const [meetings, setMetings] = useState([]);
	// const [ last, setLast] = useState();


	useEffect(()=>{
		fetch("http://localhost:8000/board2/").then(res=>res.json()).then(

		);
	},[])


	



	return (
		<div>
			게시글.
			글번호,글제목,생성시간,장소,글쓴이
			하단.
			생성버튼,조회,페이징.
			<br/>
			<div>
				{/* {meetings.map(
					  
				)} */}
			</div>
			
			{/* <link to ="/board2/write">생성쪽</link> */}
			
			 <button >a</button>
			
		</div>
	);
};

export default Board2;