import React, { useEffect, useState } from 'react';
import TestCard from './item/TestCard.js';
import ModalPage from './ModalPage.js';
import PageInfo from './item/PageInfo.js';




// 게시글 - 글번호,글제목,생성시간,장소,글쓴이
// 하단 - 조회,페이징.


const Board2 = () => {

	const [meetings, setMeetings] = useState([]);
	let p = PageInfo(1,2,3);
	console.log("page 정보 : ",p);
	
		

	

	useEffect(() => {
		fetch("http://localhost:8000/board2/").then(res => res.json()).then(
			res => {
				setMeetings(res);
			}
		);
	}, [])



	// // console.log("page 정보는 : ",page);
	// // setPage({...page,[2]:2});
	
	// setPage({
	// 	a : "12",
	// });

	return (

		<div>
			<ModalPage />
			<h1>모임 목록</h1>
			{meetings.map(
				meeting => {
					return <TestCard key={meeting.mtId} meeting={meeting} />
				}
			)}



		</div>
	);
};

export default Board2;