import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Container, Row, Col, Collapse, Button, CardBlock, Card} from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Faqs extends Component{
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggle2 = this.toggle2.bind(this);
		this.toggle3 = this.toggle3.bind(this);
		this.toggle4 = this.toggle4.bind(this);
		this.toggle5 = this.toggle5.bind(this);
		this.toggle6 = this.toggle6.bind(this);
		this.toggle7 = this.toggle7.bind(this);
		this.toggle8 = this.toggle8.bind(this);
		this.toggle9 = this.toggle9.bind(this);

		this.state = { collapse: false};
		this.state = { collapse2: false};
		this.state = { collapse3: false};
		this.state = { collapse4: false};
		this.state = { collapse5: false};
		this.state = { collapse6: false};
		this.state = { collapse7: false};
		this.state = { collapse8: false};
		this.state = { collapse9: false};
	}

	toggle(){
		this.setState({ collapse: !this.state.collapse}); 
	}

	toggle2(){
		this.setState({ collapse2: !this.state.collapse2}); 
	}

	toggle3(){
		this.setState({ collapse3: !this.state.collapse3}); 
	}

	toggle4(){
		this.setState({ collapse4: !this.state.collapse4}); 
	}

	toggle5(){
		this.setState({ collapse5: !this.state.collapse5}); 
	}

	toggle6(){
		this.setState({ collapse6: !this.state.collapse6}); 
	}

	toggle7(){
		this.setState({ collapse7: !this.state.collapse7}); 
	}

	toggle8(){
		this.setState({ collapse8: !this.state.collapse8}); 
	}

	toggle9(){
		this.setState({ collapse9: !this.state.collapse9}); 
	}

	render(){

		return(
			<div>
				<div className = "faq-page my-5 bg-light text-dark">
					<Container>
						<Col sm = "2" className = "m-auto faq-icon">
							<img src="img/faq.png" alt="" className = "img-fluid rounded-circle" />
						</Col>
						<h1 className = "header text-center">Frequently Asked Questions</h1>
						<hr/>
						<Row>
							<Col className = "faq-wrapper">
								<Card className = "one">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle} className = "mb-0">How does writeIT work?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse}>
										<CardBlock className = "p-3">
											<p>writeIT is easy to use the moment you register and create a user profile. Once registered, you’ll be lead to your profile page or dashboard where you can:</p>
											
											<ul>
												<li>create a book</li>
												
												<li>post and read messages on your wall</li>
												
												<li>edit your profile and change your profile picture</li>
												<li>view your twitter timeline</li>
												
												<li>view your friends</li> 

											</ul>
											
											<p>To create a book, click on the blue ‘Create’ button and you’ll be prompted to fill in some basic information about your book such as the title or genre. Upon submitting the form, you’ll enter the Write Menu page.</p>  
											
											<p>From there you can click on any of the eight “Stickies”: Plot, Character, Chapters, Critiques, Pictures, Notebook, Synopsis, or Query Letter. Clicking on Notebook, allows you to write freely and save your words. The Pictures sticky allows you to upload pictures inspiring your imagination. The other stickies offer guided questions to help structure and write your novel.</p>
											
											<p>To join the forums, simply click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. You can also view the most recent comments. Click on any of the five categories and you&apos;ll be lead to their individual discussion pages.</p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "two my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle2} className = "mb-0">Is it free?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse2}>
										<CardBlock className = "p-3">
											<p>Yes, writeIt is completely free to use. Enjoy!</p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "three my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle3} className = "mb-0">Are my words safe on here?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse3}>
										<CardBlock className = "p-3">
											<p>You can be confident your words are secure in our system. We have a backup for the backup of our database. Your words are important to us. </p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "four my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle4} className = "mb-0">Do you own my words?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse4}>
										<CardBlock className = "p-3">
											<p>No, definitely not. You own the intellectual property of anything you create on WriteIT.</p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "five my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle5} className = "mb-0">Can I delete my book?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse5}>
										<CardBlock className = "p-3">
											<p>Yes, but we don’t let you take the decision lightly. You’ll get a warning before deleting your book.</p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "six my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle6} className = "mb-0">How do I create new Chapter or Character in the Write Menu, i.e. chapters or plot?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse6}>
										<CardBlock className = "p-3">
											<p>Simply click on the “Stickies”, fill out the form, submit, and voila! You have a new Chapter, Character, etc.</p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "seven my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle7} className = "mb-0">Can I edit or delete the answers to categories under the write menu, i.e. chapters or plot?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse7}>
										<CardBlock className = "p-3">
											<p>Yes! Click on the blue ‘edit’ or red ‘delete’ buttons to either edit or delete your answers to the guided forms.</p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "eight my-3">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle8} className = "mb-0">How do I start a new discussion topic in the forums?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse8}>
										<CardBlock className = "p-3">
											<p>Click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. Click on any of the five categories and you’ll be lead to their individual discussion pages. On the right-hand side, click on ‘Start New Topic.’ From there, fill in the forms, hit submit, and you’ve started a new topic! </p>
										</CardBlock>
									</Collapse>	
								</Card>

								<Card className = "nine mt-3 mb-0">
									<div className = "card-header">
										<h5 color = "light" onClick = {this.toggle9} className = "mb-0">Can I delete a discussion topic?</h5>
									</div>

									<Collapse isOpen = {this.state.collapse9}>
										<CardBlock className = "p-3">
											<p>Yes! If you are the author of the discussion topic, you can delete it. The red delete button will be on the upper-right hand side of your topic.</p>
										</CardBlock>
									</Collapse>	
								</Card>










							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)

	}
	
}



export default Faqs;