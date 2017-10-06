import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Form, FormGroup} from 'react-bootstrap';
// import {Autocomplete} from 'react-autocomplete';
import {connect} from 'react-redux';
import NavBarTest from '../tester/NavBarTest';
import {Login, Register} from '../containers';
import $ from 'jquery'; 

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  isOpen: false,
		  modal1: false,
		  modal2: false
		};

		this.toggle = this.toggle.bind(this);
		this.toggle1 = this.toggle1.bind(this);
		this.toggle2 = this.toggle2.bind(this); 
	}

	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen,
		});
	}

	toggle1() {
		this.setState({
		  modal1: !this.state.modal1,
		});
	}

	toggle2() {
		this.setState({
			modal2: !this.state.modal2,
		});
	  }

	render(){

		if(this.props.registerInfo.name == undefined){
			var rightBar = [
				<Nav className="ml-auto" navbar>
					<NavItem>
					   <NavLink><Button outline color = "light" onClick = {this.toggle1} >Login</Button></NavLink>
					</NavItem>
					<NavItem>
					  <NavLink><Button outline color = "light" onClick = {this.toggle2} >Sign Up</Button></NavLink>
					</NavItem>	
		      	</Nav>
			]
		}else{
			var rightBar = [
				<Nav className="ml-auto" navbar>
					<NavItem className="navI">Welcome,
						<NavLink href='/user'>{this.props.registerInfo.name}</NavLink>
					</NavItem>
					<NavItem className = "navI">
					   <NavLink  href="/">Logout</NavLink>
					</NavItem>
		      	</Nav>
			]		
		}

		return(
			<div>
				<Navbar className="navbar-expand-md fixed-top text-white py-2 mb-5" light toggleable>
				  <Container>
				  		<NavbarToggler right onClick = {this.toggle}/>
						<NavbarBrand href="/">writeIT</NavbarBrand>
					  	<Collapse isOpen = {this.state.isOpen} navbar>
							<Form className="form-inline text-center ml-auto">
								<FormGroup>
									<Route path='/' component={NavBarTest} />
									<datalist>
										<option value='mall' />
									</datalist>
								</FormGroup>
							</Form>
							{rightBar}
						</Collapse>
					</Container>
				</Navbar>

				<Modal isOpen={this.state.modal1} toggle = {this.toggle1} className = "Login">
					<ModalHeader className = "text-center text-white" toggle = {this.toggle1}>
						<h2>Sign in to writeIT</h2>
					</ModalHeader>
					<Login/> 
				</Modal>

				<Modal isOpen={this.state.modal2} toggle = {this.toggle2} className = "Signup">
					<ModalHeader className = "text-center text-white" toggle = {this.toggle2}>
						<h2 className = "text-center">Sign up for writeIT</h2>
					</ModalHeader>
					<Register/> 
				</Modal>
	    	</div>

		)
  	}
}

function mapStateToProps(state){
	return{
		registerInfo: state.registerReducer,
	}
}
	

// export default NavBar; 
export {NavBar}; connect(mapStateToProps);
