import React, { useState, useEffect } from 'react';
import ItemBoard3 from '../../components/ItemBoard3';

const ListBoard3 = () => {

	const [board3s, setBoard3s] = useState([]);

	useEffect(() => {

		console.log("게시판 목록 그려짐 ");

		fetch("http://localhost:8000/board3", {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setBoard3s(res);
			});
	}, []);

	return (
		<table>
			<tr>
				<th>번호</th>
				<th>카테고리</th>
				<th>이름</th>
				<th>견종</th>
				<th>나이</th>
				<th>성별</th>
				<th>장소</th>
				<th>내용</th>
			</tr>
			{board3s.map((board3) => (
				<ItemBoard3 key={board3.id} board3={board3} />
			))}
		</table>
	);
};

export default ListBoard3;