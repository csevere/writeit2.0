import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import { UserProfCard, TwitterCard, Notes} from './'; 
import classnames from 'classnames';

class Dashboard extends Component{
    constructor(){
        super(); 
    }

    render(){
        return(
            <div>
                <div className = "db-tab py-5">
                    <Container>
                        <Row className = "first-row">
                            <Col className = "userCard" sm = {4}>
                                <UserProfCard/>
                            </Col>

                            <Col className = "twitterCard" sm = {4}>
                                <TwitterCard/>
                            </Col>

                            <Col className = "notes"  sm = {4}>
                                <Notes/>
                            </Col>
                        </Row> 

                        <Row className = "second-row">
                            <Col className = "youtubeCard bg-success" sm = {6}>
                                Test1
                            </Col>
                        </Row> 

                        <Row className = "third-row">
                            <Col className = "chatboxCard bg-primary" sm = {6}>
                                Test1
                            </Col>

                            <Col className = "weaterCard bg-danger" sm = {6}>
                                Test2
                            </Col>
                        </Row> 
                    </Container>
                </div> 
            </div>
        )
    }

}

export { Dashboard }; 