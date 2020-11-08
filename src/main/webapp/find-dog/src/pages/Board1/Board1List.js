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
	const addr=props.addr;
	const board1s=props.board1s;
	console.log(123123213123123, addr.addr);
	console.log("addddr", addr);
	console.log("sdfsdf",board1s);
	const [boardParks, setBoardParks] = useState([]);
	const [boardCafes, setBoardCafes] = useState([]);

	useEffect(() => {
		for(let board of board1s){
			if((board.catagory==="공원") && (board.addr===addr.addr)){
				setBoardParks([
					...boardParks,board
				])
			}
			if((board.catagory==="카페") && (board.addr===addr.addr)){
				setBoardCafes([
					...boardCafes,board
				])
			}
		}
		
	}, [addr]);
	console.log("Parks : ",boardParks);
	console.log("Cafes :",boardCafes);


	return (
		<div>
			{/* 			<h5>공원</h5>
			<hr />
			<ListStyle>
				{board1s.map((board1) => (
					(<Board1Item key={board1.id} board1={board1} category="공원" addr={addr} />)
				))}
			</ListStyle>
			<hr />
			<h5>카페</h5>
			<hr />
			<ListStyle>
				{board1s.map((board1) => (
					(<Board1Item key={board1.id} board1={board1} category="카페" addr={addr} />)
				))}
			</ListStyle> */}
		</div>
	);
};

export default Board1List;