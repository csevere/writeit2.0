import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
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
                            <Col className = "userCard bg-success" sm = {3}>
                                Test1
                            </Col>

                            <Col className = "twitterCard bg-primary" sm = {3}>
                                Test2
                            </Col>

                            <Col className = "calendarCard bg-danger"  sm = {6}>
                                Test3
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