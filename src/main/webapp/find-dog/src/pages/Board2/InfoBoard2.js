import React, { useState, useEffect } from 'react';

const InfoBoard2 = () => {


	
	const [mtList, setmtList] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8000/board2/"+3).then(res => res.json()).then(
			res => {
				setmtList(res.mtList);
				console.log(mtList);
			}
		);
	}, [])


	return (
		<div>
			장소,제목,시간,기타,현재 참석명단,전체인원 및 현재참가인원

			<div>
					{mtList.map(List => 
					List.mtName
					)}

			</div>

			

		</div>
	);
};

export default InfoBoard2;