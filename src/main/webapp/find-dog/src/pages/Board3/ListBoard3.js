import React, { useState, useEffect } from 'react';
import ItemBoard3 from '../../components/ItemBoard3';

const ListBoard3 = () => {

	const [posts, setPosts] = useState([]);

	useEffect(() => {

		console.log("게시판 목록 그려짐 ");

		fetch("http://localhost:8000/board3", {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setPosts(res);
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
				<th>이미지</th>
				<th>내용</th>
			</tr>
			{posts.map((post) => (
				<ItemBoard3 key={post.id} post={post} />
			))}
		</table>
	);
};

export default ListBoard3;