import React from 'react';
import  {
	ListGroup,
	Container,
	Row,
} from 'react-bootstrap';


const Results = () => (
	<Container>
		<Row>
		<h2>Results List </h2>
				</Row>
		<ListGroup>
		  <ListGroup.Item href="#" active>Link 1</ListGroup.Item>
		  <ListGroup.Item href="#">Link 2</ListGroup.Item>
		  <ListGroup.Item href="#" disabled>Link 3</ListGroup.Item>
		</ListGroup>

	</Container>

);

export default Results;