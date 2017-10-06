import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserNav from './UserNav'; 


class parentUser extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className = "user-page py-5 my-5">
                    <Container>
                        <UserNav />
                    </Container> 
                </div>
            </div>
        )
    }
}

export default parentUser; 



