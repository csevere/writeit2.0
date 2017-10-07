import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ControlLabel} from 'react-bootstrap'
// Our action needs bindActionCreators from redux
import  {bindActionCreators} from 'redux';
// Get the registerAction function which runs on submission
import LoginAction from '../actions/LoginAction';
// Because this is a container, we need connect from react-redux!
import {connect} from 'react-redux';


export class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			passwordError: null,
			emailError: null,
			formError: false
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		// console.log("User SUbmitted the form!!")
		var email = event.target[0].value
		var password = event.target[1].value
		var error = false;

		//Password
		if(password.length == 0){
			var passwordError = "error";
			error=true;
		}
		else{ 
			var passwordError = "null"
		}

		//Email
		if(email.length < 3){var emailError = "error"; error=true}
		else{var emailError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				emailError: emailError,
				passwordError: passwordError
			}) 
		}else{
			this.props.loginAction({
				email: email,
				password: password
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.registerResponse)
		console.log("=======================")

		if(nextProps.registerResponse.msg == 'loginSuccess'){
			// this.props.getCart(nextProps.registerResponse.token)
			this.props.history.push('/user');
		}else if(nextProps.registerResponse.msg == 'userAlreadyExists'){
			console.log("User name taken!")
			this.setState({
				registerMessage: "Sorry, this username is already taken."
			})
		}		
	}

	render(){

		// this.setState({
		// 	bad: ""
		// })

		return(
			<div>
				<ModalBody>
					<h4 className="text-danger">{this.state.registerMessage}</h4>
					<Form horizontal onSubmit={this.handleLogin}>
						<FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
							<Label componentClass={ControlLabel} for="Email">Email</Label>
							<Input type="email" name="email" placeholder="Email" />
						</FormGroup>

						<FormGroup controlId="formHorizontalName" validationState={this.state.emailError} >
							<Label componentClass={ControlLabel}  for="Password">Password</Label>
							<Input type="password" name="password" placeholder="Password" />
						</FormGroup>
						
						<FormGroup>
							<Button color = "primary" size="lg" type="submit" block>
							Login</Button>
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
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);







