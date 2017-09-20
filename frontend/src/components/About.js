import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';




class About extends Component{

	render(){
		return(
			<div className = "about-page">
				<div className = "about1">
					<div className ="overlay-about"></div>
					<Container className = "about1-wrapper text-white">
						<Row>
							<Col sm = "12" className ="m-auto">
								<Col sm = "2" className = "m-auto abt-icon">
									<img src="img/about.png" alt="" className = "img-fluid rounded-circle" />
								</Col>
								<div className = "info-header">
									<h1 className = "pb-5 text-center display-2">What is writeIT?</h1>
								</div>
							</Col>
						</Row>

						<Row className="about-text text-center">
							<Col sm="12" className = "m-auto">
								<div>
									<h1><i>Simplicity</i></h1>
									<p>
									Writing a book can be an intimidating and complex endeavor. With writeIT, we give 
									you simple tools to break the task into easy, manageable parts. You’ll spend
									more time creating your story rather than stressing out about how you’ll do it.
									</p>

									<p>
									Just think of writeIT as the bridge getting you from only <i>thinking</i> about a book 
									idea to actually <i>writing</i> it. If you’re already a seasoned writer, you’ll appreciate 
									how writeIT simplifies your writing dashboard by putting the essential tools in one,
									easily-accessible place.
									</p>
								</div>
							</Col>
						</Row>	
					</Container> 
				</div> 
				
				<div className = "about2">
					<div className ="overlay-about2"></div>
					<Container className = "about2-wrapper text-white">
						<Row className="about-text text-center">
							<Col sm="6" className = "mr-auto">
								<div>
									<h1><i>Safety</i></h1>
									<p>We don’t and will never own any of the words you produce on writeIT. It’s all yours. Feel free to delete, edit, or move any parts of your work elsewhere.You can trust your words to stay safe in our system.
									</p>
								</div>
							</Col>
						</Row>	
					</Container> 
				</div>  

				
		    </div>
		)
	}
}

export default About; 

// Col xs={6}>
// <div>
// 	<h3>Safety</h3><hr id="safety" />

// 		<p>We don’t and will never own any of the words you produce on writeIT. 
// 		It’s all yours. Feel free to delete, edit, or move any parts of your work elsewhere.
// 		You can trust your words to stay safe in our system.
// 		</p>
// </div>	
// </Col>

// <Row className="about-row2">
// <Col xs={4}>
// <div className="organization">
// 	<h3> Organization </h3><hr id='organization' />
// 	<p>
// 	Some people write best without structure, freely typing words from beginning to end.  
// 	And that’s totally cool! Others need organization. If you’re in the latter group, you’ll love writeIT for the way it helps you keep tabs on essential components
// 	such as characters or the plot. 
// 	</p>

// 	<p>You’ll also find suggestions for critiquing other writers’ work and yours, along with writing a query letter an 
// 	the dreaded synopsis for literary agents.
// 	</p>
// </div>
// </Col>
// <Col xs={4}>
// <div>
// 	<h3>Fun</h3><hr id="fun" /> 

// 		<p>
// 		Writing a story is fun. Yes, fun. 
// 		The process of creating characters and placing them in new worlds to battle enemies
// 		or overcome great challenges should bring excitement to any writer.
// 		But sometimes working on a manuscript that once brought joy can become a chore or a slow slog to the finish line. 
// 		</p>
		
// 		<p>Our tools aim to keep that positive energy alive whether you’re writing the dire middle parts, difficult chapters or scenes,
// 		or producing a satisfying ending to your book. 
// 		</p>

	
// </div>	
// </Col>
// <Col xs={4}>
// <div>
// 	<h3>Social</h3><hr id="social" />

// 		<p>Writing a book shouldn’t have to be a solitary endeavor. Writers need other writers. 
// 		We understand that need so we created a forum for writers of multiple genres to share ideas, 
// 		seek or give feedback on chapters or scenes, or talk about any topic related to writing. 
// 		</p>
// </div>	
// </Col>
// </Row>