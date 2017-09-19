import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './NavBar';

class Home extends Component{
	 
	render(){
		return(
			<div>
				<div className = "home-page py-5">
					<Container>
						<Row className = "no-gutters">
							<Col md= "12">
								<h3 className = "tagline py-5">Writing a novel is now fun for everyone.</h3>
							</Col>
						</Row>

						<Row className = "no-gutters">
							<div className = "d-flex flex-wrap align-items-center col-md-12 m-auto menu">
								<div className = "circle dashboad mr-3">
									<img src="img/dashboard.png" alt="" className ="img-fluid rounded-circle"/>
									<div className = "text-white text-center">DASHBOARD</div> 
								</div>

								<div className = "circle resources mr-3">
									<img src="img/resources.png" alt="" className = "img-fluid rounded-circle"/>
									<div className = "text-white text-center">RESOURCES</div> 
								</div>

								<div className = "circle community mr-3">
									<img src="img/community.png" alt="" className ="img-fluid rounded-circle"/>
									<div className = "text-white text-center">COMMUNITY</div> 
								</div>

								<div className= "circle about mr-3"><img src="img/about.png" alt="" className = "img-fluid rounded-circle"/>
									<div className = "text-white text-center">ABOUT</div> 
								</div>
								<div className = "circle faq mr-3"><img src="img/faq.png" alt="" className = "img-fluid rounded-circle"/>
									<div className = "text-white text-center">FAQ</div> </div>
							</div>
						</Row>
					</Container> 
				</div>   
			</div>

		)
	}
}

export default Home;

