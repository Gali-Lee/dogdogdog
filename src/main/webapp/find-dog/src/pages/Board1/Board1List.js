import React, { useState, useEffect } from 'react';
import Board1Item from '../../components/Board1Item';
import styled from 'styled-components';
import update from 'react-addons-update';


const ListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  //padding: 20px 250px;
`;
const Board1List = (props) => {
	const addr = props.addr;
	const board1s = props.board1s;
	console.log("addddr", addr);

	const [boardParks, setBoardParks] = useState([]);
	const [boardCafes, setBoardCafes] = useState([]);
	const [test, setTest] = useState([]);
	let arrayParks = [];
	let arrayCafes = [];
	let array


	useEffect(() => {
		for (let board of board1s) {
			if (addr === "전체") {
				if (board.catagory === "공원") {
					arrayParks.push(board);
				} else if (board.catagory === "카페") {
					arrayCafes.push(board);
				}
			} else {
				if ((board.catagory === "공원") && (board.addr === addr)) {
					console.log("boardParks : ", board);
					console.log("Username : ",board.user.username);
					arrayParks.push(board);
				}
				if ((board.catagory === "카페") && (board.addr === addr)) {
					console.log("boardCafes : ", board);
					console.log("Username: ",board.user.username);
					arrayCafes.push(board);
				}
			}
		}
		// setBoardCafes([
		// 			...boardCafes,board
		// 		])
		console.log("array : ", arrayParks);
		console.log("array : ", arrayCafes);
		setBoardParks(arrayParks);
		setBoardCafes(arrayCafes);
	}, [addr]);

	return (
		<div>
			<h5>공원</h5>
			<hr />
			<ListStyle>
				{boardParks.map((board1) => (
					(<Board1Item key={board1.id} board1={board1} />)
				))}
			</ListStyle>
			<hr />
			<h5>카페</h5>
			<hr />
			<ListStyle>
				{boardCafes.map((board1) => (
					(<Board1Item key={board1.id} board1={board1} />)
				))}
			</ListStyle>
		</div>
	);
};

export default Board1List;