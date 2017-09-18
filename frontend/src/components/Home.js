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
							<div className = "d-flex flex-wrap align-items-center col-md-6 m-auto">
								<div className = "circle"></div>
								<div className = "circle"></div>
								<div className = "circle"></div>
								<div className = "circle"></div>
								<div className = "circle"></div>
							</div>
						</Row>
					</Container> 
				</div>   
			</div>

		)
	}
}

export default Home;


		// 	<Grid className = "home">
		// 	<Row>
		// 		<div className = "overlay"></div> 
		// 		<div className = "container">
		// 			<Col sm = {12} smOffset ={1} className = "subtitle">
		// 				<div><h3>Writing a novel is now fun and easy for everyone.</h3></div> 
		// 			</Col>
		// 		</div> 
			
		// 		<div className ="container homeNav">
		// 			<Row>
		// 				<ul>
		// 					<li><Link to ="/"><div className="hex hexagon text-center"><h3>HOME</h3></div></Link></li>
		// 					<li><Link to ="/user"><div className="hex hex2 text-center"><h3>DASHBOARD</h3></div></Link></li>
		// 					<li><Link to ="/forums"><div className="hex hex3 text-center"><h3>COMMUNITY</h3></div></Link></li>
		// 					<li><Link to ="/resources"><div className="hex hex4 text-center"><h3>RESOURCES</h3></div></Link></li>
		// 					<li><Link to ="/about"><div className="hex hex5 text-center"><h3>ABOUT</h3></div></Link></li>
		// 					<li><Link to ="/faqs"><div className="hex hex6 text-center"><h3>FAQ</h3></div></Link></li>
		// 				</ul>
		// 			</Row>
		// 		</div>				

		// 	</Row>	
		// </Grid> 
			



		// 	  <!-- HOME PAGE -->
		// 	  <section id= "home-page" class = "py-5">
		// 	  <div class="container">
		// 		  <div class="row no-gutters">
		// 			  <div class="col-lg-12 text-center name-wrapper">
		// 				  <h1 id = "myName" class = "display-2 pt-5">Carla Severe</h1>
		// 				  <h1 id = "myTitle" class = "display-3 pt-3"> Web Developer</h1>
		// 			  </div>
		// 			  <canvas id = "intro-canvas" width = "600px" height= "600px"/>
		// 		  </div>
		// 		  <div class="row">
		// 			  <i class="fa fa-angle-double-down text-white m-auto"></i>
		// 		  </div> 
		// 	  </div>
		//   </section>

