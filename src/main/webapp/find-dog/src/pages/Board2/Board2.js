import React, { useEffect, useState } from 'react';
import ListItem from './item/ListItem';
import TestCard from './item/TestCard.js';



const Board2 = () => {

	const [meetings, setMeetings] = useState([]);
	// const [ last, setLast] = useState();


	useEffect(() => {
		fetch("http://localhost:8000/board2/").then(res => res.json()).then(
			res => {
				setMeetings(res);
				console.log(res);
			}
		);
	}, [])

	return (
		<div>
			{/* 게시글 - 글번호,글제목,생성시간,장소,글쓴이
			하단 - 조회,페이징. */}
			<h1>모임 목록</h1>
			<hr />

			{meetings.map(
				meeting => {
					return <TestCard key={meeting.mtId} meeting={meeting} />
				}
			)}



		</div>
	);
};

export default Board2;