import React from 'react';
import { Card, Button, CardHeader, CardFooter,
  CardTitle, CardText, CardImg } from 'reactstrap';

const ExCard = (props) => {
  return (
    <div>
      <Card>
	  <CardImg top width="100%" src="img/person.jpeg" alt="Card image cap" />
        <div className = "card-body">
          <CardTitle className = "text-center"><h2>User's Name</h2></CardTitle>
		  <CardText className = "text-center text-muted">User's Title.</CardText>
		  <CardText className = "text-center lead">Information about the User that's relevant, fun, or interesting</CardText>
        </div>
		<CardFooter>
			<div className="d-sm-flex flex-row">
				<div className = "p-2">Following: 493</div>
				<div className = "p-2">Followers: 500</div> 
			</div>
		</CardFooter>
      </Card>
    </div>
  );
};

export {ExCard}; 