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
			<th>{place}</th>
			<th>{content}</th>
		</tr >
	);
};

export default ItemBoard3;