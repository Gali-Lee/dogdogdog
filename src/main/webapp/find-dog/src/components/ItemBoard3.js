import React from 'react';
import { Link } from 'react-router-dom';

const ItemBoard3 = (props) => {
	const { id, catagory, name, bread, age, sex, place, image, content} = props.post;
	
	return (
		<tr>
			<th>{id}</th>
			<th><Link to={"/Board3/" + id}>{catagory}</Link></th>
			<th>{name}</th>
			<th>{bread}</th>
			<th>{age}</th>
			<th>{sex}</th>
			<th>{place}</th>
			<th>{image}</th>
			<th>{content}</th>
		</tr>
	);
};

export default ItemBoard3;