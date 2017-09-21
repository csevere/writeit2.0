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
									more time creating your story rather than stressing out about how you’ll do it.</p>

									<p>
									Just think of writeIT as the bridge getting you from only <i>thinking</i> about a book 
									idea to actually <i>writing</i> it. If you’re already a seasoned writer, you’ll appreciate 
									how writeIT simplifies your writing dashboard by putting the essential tools in one,
									easily-accessible place.</p>
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
									<p>We don’t and never will own any of the content you produce on writeIT. It’s all yours. Feel free to delete, edit, or move any parts of your work elsewhere.You can trust your words to stay safe in our system. That's our promise to you.</p>
								</div>
							</Col>
						</Row>	
					</Container> 
				</div>  

				<div className = "about3">
					<div className ="overlay-about3"></div>
					<Container className = "about3-wrapper text-white">
						<Row className="about-text text-center">
							<Col sm="6" className = "ml-auto">
								<div>
									<h1><i>Organization</i></h1>
									<p>Some people write best without structure, freely typing words from beginning to end.  
And that’s totally cool! Others need organization. If you’re in the latter group, you’ll love how writeIT helps keep tabs on essential components such as characters, scenes, or plotting. Have fun being an organization wizard.</p>

<p>If you're new to writing a novel, you’ll find suggestions for crafting plot, creating believable characters, effective scenes, and much more. You'll also get suggestions on critiquing other writers’ work and yours, writing a query letter, along with the dreaded synopsis for literary agents.</p>
									
								</div>
							</Col>
						</Row>	
					</Container> 
				</div> 

				<div className = "about4">
					<div className ="overlay-about4"></div>
					<Container className = "about4-wrapper text-white">
						<Row className="about-text text-center">
							<Col sm="6" className = "mr-auto">
								<div>
									<h1><i>Community</i></h1>
									<p>Writing a book shouldn’t have to be a solitary journey. Writers <i>need</i> other writers. We understand that at writeIT so we've created a forum for writers of multiple genres to offer ideas, seek or give feedback on written works, share successes and failures, or chat about any topic related to writing.</p>
								</div>
							</Col>
						</Row>	
					</Container> 
				</div> 

				<div className = "about5">
					<div className ="overlay-about5"></div>
					<Container className = "about5-wrapper text-white">
						<Row className="about-text text-center">
							<Col sm="6" className = "m-auto">
								<div>
									<h1><i>Fun</i></h1>
									<p>Writing a story is fun. Yes, <i>fun</i>. The process of creating characters and placing them in new worlds to battle enemies or overcome great challenges should bring excitement to any writer. But sometimes working on a manuscript that once brought joy can become a chore or a slow slog to the finish line.</p>
		
<p>Our tools aim to keep that positive energy alive whether you’re writing the dire middle parts, difficult chapters or scenes, or producing a satisfying ending to your book.
</p>

<p>Join writeIT today!</p>
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