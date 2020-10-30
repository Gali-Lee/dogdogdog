import React, { useEffect, useState } from 'react';
import TestCard from './item/TestCard.js';
import ModalPage from './ModalPage.js';


// 게시글 - 글번호,글제목,생성시간,장소,글쓴이
// 하단 - 조회,페이징.


const Board2 = () => {

	const [meetings, setMeetings] = useState([]);
	// const [ last, setLast] = useState();


	useEffect(() => {
		fetch("http://localhost:8000/board2/").then(res => res.json()).then(
			res => {
				setMeetings(res);
			}
		);
	}, [])

	
	return (

		<div>
			
			<ModalPage/>
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