import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemStyle = styled.div`
  display: grid;
  grid-gap: 5px;
  //grid-template-columns: 70% 30%;
  justify-content: space-around;
  border: 2px solid #003458;
  border-radius: 10px;
  padding: 10px 10px;
`;
const Board1Item = (props) => {
	const category = props.category;
	const add = props.addr;
	const { id, catagory, addr, title, place, image1, image2, content } = props.board1;




	return (
		<div>
			{(category === catagory) && (addr ===add.addr) ?
				(<ItemStyle>
					<div>
						<div>{catagory}</div>
						<img src={"\\images\\" + image1} alt="" height="200px" />
						<div>분류 : {catagory}</div>
						<div>제목 : {title}</div>
						<div>장소 : {place}</div>
						<Link to={"/board1/detail/" + id}><button>자세히 보기</button></Link>
					</div>
				</ItemStyle>)
				:
				null
			}
		</div>
	);
};

export default Board1Item;