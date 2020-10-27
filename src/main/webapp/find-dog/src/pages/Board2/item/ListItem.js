import React from 'react';
import { Card, Button } from 'react-bootstrap'

const ListItem = ({Id,Title}) => {

	console.log("item")

	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						aaa
    				</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>

			{/* <h1>{Id}</h1>
			<h1>{Title}</h1> */}

			{/* <Card.Body>
				<Card.Title>{Title}</Card.Title>
			</Card.Body> */}
		</div>
	);
};

export default ListItem;