import React, { useEffect, useState } from 'react';
import ListItem from './item/ListItem';
import TestItem from './item/TestItem';
import Original from './item/Original';



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

	// const me = meetings.map(m=> (<ListItem key={m.mtId} id={m.mtId} title={m.mtTitle} />));




	return (
		<div>
			게시글.
			글번호,글제목,생성시간,장소,글쓴이
			하단.
			생성버튼,조회,페이징.
			<br />
			{/* <div>
				{meetings.map(
					meeting =>
						<ListItem Id={meeting.mtId} Title={meeting.mtTitle} />
					// <ListItem key={meeting.mtId} id={meeting.mtId} title={meeting.mtTitle}/>
				)}
			</div> */}

			<div>
				{/* <TestItem/> */}
				<Original/>
			</div>

		</div>
	);
};

export default Board2;