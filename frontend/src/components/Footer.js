import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';



class Footer extends Component{
	render(){
		return(
			<footer className = "main-footer bg-white text-right p-4 text-muted">
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
}
	

export default Footer; 

