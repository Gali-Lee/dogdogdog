import React from 'react';
import { Link } from 'react-router-dom';

const ItemBoard3 = (props) => {
	const { id, catagory, name, bread, age, sex, place, image1, image2, content } = props.board3;

	return (
		<tr>
			<th>{id}</th>
			<th>{catagory}</th>
			<th><Link to={"/board3/detail/" + id}>{name}</Link></th>
			<th>{bread}</th>
			<th>{age}</th>
			<th>{sex}</th>
			<th>{place}</th>../
			{/* <th><img alt="" src={require ("http:localhost:3000/images/03d065de-3746-462d-9ed1-1a7b95ac3a29-napa.jpg")}/></th>
			 */}
			<th><img src={image1} alt="" height="200px" /></th>
			{/* <th><img src={require('../images/'+{image2})} alt="" height="200px" /></th> */}
			<th>{content}</th>
		</tr >
	);
};

export default ItemBoard3;