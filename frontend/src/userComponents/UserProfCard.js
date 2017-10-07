import React from 'react';
import { Card, Button, CardHeader, CardFooter,
    CardTitle, CardText, CardImg} from 'reactstrap';


const UserProfCard  = () =>{
    return(
        <div className = "userprofcard">
            <Card>
                <CardImg top width="100%" src="img/person.jpeg" alt="Card image cap" />
                <div className = "card-body">
                    <CardTitle className = "pt-2 text-center"><h3>User's Name</h3></CardTitle>
                    <CardText className = "text-center text-muted"><h4>User's Title</h4></CardText>
                    <CardText className = "text-center lead">Information about the User that's relevant, cool, or interesting</CardText>
                </div>
                <CardFooter>
                    <div className="d-flex justify-content-center">
                        <div className = "text-center p-2">Following: <br/><h4>493</h4></div>
                        <div className = "text-center p-2">Followers: <br/><h4>500</h4></div> 
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export { UserProfCard };  