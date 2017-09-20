import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Form, FormGroup} from 'react-bootstrap';
// import {Autocomplete} from 'react-autocomplete';
import {connect} from 'react-redux';
import NavBarTest from '../tester/NavBarTest';
import Login from '../containers/Login'; 
import $ from 'jquery'; 

class NavBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  isOpen: false,
		  modal: false
		};

		this.toggle = this.toggle.bind(this);
		this.toggle = this.toggle.bind(this); 
	  }

	  toggle() {
		this.setState({
		  isOpen: !this.state.isOpen,
		  modal: !this.state.modal
		});
	  }

	render(){

		if(this.props.registerInfo.name == undefined){
			var rightBar = [
				<Nav className="ml-auto" navbar>
					<NavItem className = "navI">
						<NavLink href="/">Home</NavLink>
					</NavItem>
					<NavItem>
					   <NavLink><Button className = "login" color = "light" onClick = {this.toggle}>Login</Button></NavLink>
					</NavItem>
					<NavItem>
					  <NavLink href="/signup">Sign up</NavLink>
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
						<NavLink className = "home-nav" href="/">Home</NavLink>
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
				<Modal isOpen={this.state.modal} toggle = {this.toggle} className = {this.props.Login}>
					<ModalHeader className = "text-center" toggle = {this.toggle}>Login to writeIT</ModalHeader>
					<Login/> 
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
export default connect(mapStateToProps)(NavBar)
