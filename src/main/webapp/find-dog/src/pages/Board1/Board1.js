import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Board1List from './Board1List';
import styled from 'styled-components';


const SelectStyle = styled.select`
  height: 45px;
  width: 80%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;


const Board1 = () => {
	const [place, setPlace] = useState("");
	function inputHandle(e) {
		setPlace(e.target.value);
		console.log(place);

	}
	const [board1s,setBoard1s] = useState([]);
	useEffect(() => {

		console.log("board3 목록");

		fetch("http://localhost:8000/board1", {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				console.log("res : ", res);
				setBoard1s(res);
			});
		
	}, []);


	return (
		<div>
			<Link to={"/board1/write"}>
				<button>글쓰기</button>
			</Link>
			<select type="text" name="place" onChange={inputHandle}>
				<option name="place" value="부산진구">부산진구</option>
				<option name="place" value="남구">남구</option>
				<option name="place" value="강서구">강서구</option>
				<option name="place" value="해운대구">해운대구</option>
				<option name="place" value="서구">서구</option>
				<option name="place" value="북구">북구</option>
				<option name="place" value="수영구">수영구</option>
				<option name="place" value="동래구">동래구</option>
				<option name="place" value="금정구">금정구</option>
			</select>
			<Board1List addr={place} board1s={board1s}/>
		</div>
	);
};

export default Board1;