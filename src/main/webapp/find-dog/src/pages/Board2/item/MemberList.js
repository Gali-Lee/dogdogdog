import React, { useState, useEffect } from 'react';

const MemberList = (props) => {
	let { id } = props;

	const [mtmList, setMtmList] = useState([]);
	// @GetMapping("/board2/mList/{id}")

	useEffect(() => {
		fetch("http://localhost:8000/board2/mList/" + id).then(res => res.json()).then(
			res => {
				setMtmList(res);
			}
		);
	}, [])


	return (
		<div>
			<h3>참석자 명단</h3>
				{mtmList.map(
				member =>
					<li>{member}</li>
			)}
		</div>
	);
};

export default MemberList;