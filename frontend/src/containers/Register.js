import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {ControlLabel} from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
// Our action needs bindActionCreators from redux
import  {bindActionCreators} from 'redux';
// Get the registerAction function which runs on submission
import RegisterAction from '../actions/RegisterAction';
// import LoginAction from '..actions/LoginAction';
// Because this is a container, we need connect from react-redux!
import {connect} from 'react-redux';

export class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			nameError: null,
			emailError: null,
			formError: false
		}
		this.handleRegistration = this.handleRegistration.bind(this);
	}

	handleRegistration(event){
		event.preventDefault();
		// console.log("User SUbmitted the form!!")
		var name = event.target[0].value;
		var email = event.target[1].value;
		var username = event.target[2].value;
		var t_username = event.target[3].value;
		var password = event.target[4].value;
		var occupation = event.target[5].value;
		var about = event.target[6].value;
		var location = event.target[7].value;
		

		var error = false;

		//Name
		if(name.length < 3){
			var nameError = "error"; 
			error=true;
		}
		else{ 
			var nameError = "success"
		}

		//Email
		if(email.length < 3){var emailError = "error"; error=true}
		else{var emailError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				emailError: emailError,
				nameError: nameError
			}) 

		console.log(error);
		}else{
			this.props.registerAction({
				name: name,
				email: email,
				username: username,
				password: password,
				occupation: occupation,
				about: about,
				location: location,
				t_username: t_username 
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.registerResponse)
		console.log("=======================")

		if(nextProps.registerResponse.msg == 'userInserted'){
			this.props.history.push('/user');
		}else if(nextProps.registerResponse.msg == 'userAlreadyExists'){
			console.log("User name taken!")
			this.setState({
				registerMessage: "This email is already linked to an account."
			})
		}		
	}

	render(){

		return(
			<div>
				<ModalBody>
					<h4 className="text-danger">{this.state.registerMessage}</h4>
					<Form horizontal onSubmit={this.handleRegistration}>
						<FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
							<Label componentClass={ControlLabel} for="Name">Name</Label>
							<Input type="text" name="name" placeholder="Name" />
						</FormGroup>

						<FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
							<Label componentClass={ControlLabel} for="Name">Email</Label>
							<Input type="email" name="email" placeholder="Email" />
						</FormGroup>

						<FormGroup controlId="formHorizontalName">
							<Label componentClass={ControlLabel} for="Name">Username</Label>
							<Input type="text" name="username" placeholder="Username" />
						</FormGroup>

						<FormGroup controlId="formHorizontalName">
							<Label componentClass={ControlLabel} for="Name">Password</Label>
							<Input type="password" name="password" placeholder="Password" />
						</FormGroup>


						<FormGroup controlId="formHorizontalName">
							<Label componentClass={ControlLabel} for="Twitter">Twitter</Label>
							<InputGroup>
								<InputGroupAddon>@</InputGroupAddon>
								<Input type = "text" name = "t_username" placeholder="MyTwitterUsername" />
						  </InputGroup>
						</FormGroup>


						<FormGroup controlId="formHorizontalName">
							<Label componentClass={ControlLabel} for="Occupation">Occupation</Label>
							<Input type="text" name="occupation" placeholder="professional skydiver" />
						</FormGroup>


						<FormGroup controlId="formHorizontalName">
							<Label componentClass={ControlLabel} for="About">About</Label>
							<Input type="textarea" name="state" placeholder="Hobbies, interests, music, movies, etc..."/>
						</FormGroup>

						<FormGroup controlId="formHorizontalName">
							<Label componentClass={ControlLabel} for="Location">Location</Label>
							<Input type="text" name="location" placeholder="Paris, France" />
						</FormGroup>

						<FormGroup>
							<Button color = "primary" size="lg" type="submit" block>
							Join writeIT!</Button>
						</FormGroup>

						<ModalFooter>
							<p className = "text-muted">Write, organize, and interact with other writers on writeIT.</p>
						</ModalFooter>
					
					</Form>
				</ModalBody>

			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

connect(mapStateToProps,mapDispatchToProps)(Register);




