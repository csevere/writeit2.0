import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';



const Footer = () => { 

	return(
		<footer className = "main-footer bg-white text-right pt-3 text-muted">
			<Container>
				<Row className="no-gutters">
					<Col>
						<p>Copyright &copy; 2017 writeIT</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
	

export { Footer }; 

