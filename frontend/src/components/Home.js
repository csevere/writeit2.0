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
							<Col sm = "12">
								<h3 className = "tagline py-5">Writing a novel is now fun and easy for everyone!</h3>
							</Col>
						</Row>

						<Row className = "no-gutters">
							<div className = "d-flex flex-wrap align-items-center col-md-12 m-auto menu">
								<div className = "circle dashboad mr-3">
									<Link to ="/user"><img src="img/dashboard.png" alt="" className ="img-fluid rounded-circle"/>
									<div className = "text-center">DASHBOARD</div></Link> 
								</div>

								<div className = "circle resources mr-3">
									<Link to = "/resources"><img src="img/resources.png" alt="" className = "img-fluid rounded-circle"/>
									<div className = "text-center">RESOURCES</div></Link> 
								</div>

								<div className = "circle community mr-3">
									<Link to = "/forums"><img src="img/community.png" alt="" className ="img-fluid rounded-circle"/>
									<div className = "text-center">COMMUNITY</div></Link> 
								</div>

								<div className= "circle about mr-3">
									<Link to = "/about"><img src="img/about.png" alt="" className = "img-fluid rounded-circle"/>
									<div className = "text-center">ABOUT</div></Link> 
								</div>
								<div className = "circle faq mr-3">
									<Link to = "/faqs"><img src="img/faq.png" alt="" className = "img-fluid rounded-circle"/>
									<div className = "text-center">FAQ</div></Link> 
								</div>
							</div>
						</Row>
					</Container> 
				</div>   
			</div>

		)
	}
}

export default Home;

