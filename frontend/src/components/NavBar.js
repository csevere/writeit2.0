import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Form, FormGroup} from 'react-bootstrap';
// import {Autocomplete} from 'react-autocomplete';
import {connect} from 'react-redux';
import NavBarTest from '../tester/NavBarTest';
import $ from 'jquery'; 

class NavBar extends Component{
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  isOpen: false
		};
	  }

	  toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	  }

	render(){

		if(this.props.registerInfo.name == undefined){
			var rightBar = [
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink className = "home" href="/">Home</NavLink>
					</NavItem>
					<NavItem>
					   <NavLink className = "login" href="/login">Login</NavLink>
					</NavItem>
					<NavItem className = "nav-item">
					  <NavLink className = "signup" href="/signup">Sign up</NavLink>
					</NavItem>	
		      	</Nav>
			]
		}else{
			var rightBar = [
				<Nav className="ml-auto" navbar>
					<NavItem className="home-nav2">Welcome,
						<NavLink href='/user'>{this.props.registerInfo.name}</NavLink>
					</NavItem>
					<NavItem className = "nav-item">
						<NavLink className = "home-nav" href="/">Home</NavLink>
					</NavItem>
					<NavItem className = "logout">
					   <NavLink  href="/">Logout</NavLink>
					</NavItem>
		      	</Nav>
			]		
		}

		return(
			<div>
				<Navbar className="navbar-expand-md fixed-top text-white" light toggleable>
				  <Container>
				  		<NavbarToggler right onClick = {this.toggle}/>
						<NavbarBrand href="index.html">writeIT</NavbarBrand>
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



// 	if(this.props.registerInfo.name == undefined){
// 			var rightBar = [
// 				<li key="1" className="text-right"><Link to="/login">Login</Link></li>,
// 				<li key="2" className="text-right"><Link to="/signup">Sign up</Link></li>,
						
// 			]
// 		}else{
// 			var rightBar = [
// 				<li key="1" className="text-right">Hi, {this.props.registerInfo.name}</li>,	
// 				<li key="2" className="text-right"><Link to="/logout">Logout</Link></li>	
// 			]		
// 		}
