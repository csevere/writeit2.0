/**
 * Created by mephisto on 7/28/17.
 */
import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
import $ from 'jquery';
import PostAction from '../actions/PostAction';
import  {Timeline} from 'react-twitter-widgets'; 
// import UserProfileAction from '../actions/UserProfileAction';
import FileInput from 'react-file-input'; 

class tOtherUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                location: null,
                username: null,
                about: null,
                t_username: null
            },
            bookData: [],
            postData: [],
            picData: {
                picture: '../public/frontend/images/profile-pic.png'
                
            }

            // nameError: null,
            // emailError: null,
            // formError: false
        }
        this.handlePost = this.handlePost.bind(this);
        this.loadPosts = this.loadPosts.bind(this);

    }

    handlePost(event){
        event.preventDefault();

        console.log(this.props.match.params.profile);
        var username = this.props.match.params.profile;
        var post = document.getElementById('post').value;
        var from_user = this.props.registerResponse.name;
       



        this.props.postAction({
            username: username,
            post: post,
            from_user: from_user

        });
        
    }

    componentDidMount(){
        $.getJSON(`${window.hostAddress}/user?username=${this.props.match.params.profile}`, (serverData)=>{
            // log the JSON response from Express
            //console.log(serverData.userData)
            this.setState({
                userData: serverData.userData
            })
        })

        $.getJSON(`${window.hostAddress}/book?username=${this.props.match.params.profile}`, (serverData)=>{
            // log the JSON response from Express
            //console.log(serverData.bookData)
            this.setState({
                bookData: serverData.bookData
            })
        });

        this.loadPosts();

        setInterval(this.loadPosts, 30000);

        $.getJSON(`${window.hostAddress}/profilepic?username=${this.props.match.params.profile}`, (serverData)=>{
            // log the JSON response from Express
            console.log(serverData)
            if(serverData.picData !== undefined){
                this.setState({
                    picData: serverData.picData
                    
            })

            }


        });

        // console.log(this.state.bookData)
    }

    loadPosts(){
        $.getJSON(`${window.hostAddress}/post?username=${this.props.match.params.profile}`, (serverData)=>{
        // log the JSON response from Express
        //console.log(serverData.bookData)
        this.setState({
            postData: serverData.postData
        })
    });
    }


    render(){

        var from_user = this.props.registerResponse.name;
        console.log(from_user);

        console.log(this.props.match.params.profile);

        var profilepic = this.state.picData.picture;
        var picLocation = '../public/frontend/images/profile-pic.png';
        if(profilepic.length > 2){
            picLocation = profilepic.slice(18);
            console.log(picLocation)
        }else{
            picLocation = picLocation.slice(18);

        }
        console.log('pic path here');
        console.log(profilepic);
        var username = this.state.userData.username;
        var location = this.state.userData.location;
        var about = this.state.userData.about;
        var t_username = this.state.userData.t_username; 
        console.log(location)

        var bookArray = [];
        var postArray = [];

        this.state.bookData.map((book, index)=>{
           var link = '/write/' +  book.title;
           bookArray.push(
               <div className = "row works col-sm-6 text-center">
                   <div className="row">
                       {book.title}
                   </div>
                   <img className="book-image" src="/images/profile-bg.jpg"/>
               </div>

           )
        });

        this.state.postData.map((post, index)=>{
           postArray.push(
               <div className = "display-message">
                    <div>{post.from_user}{post.time_posted}:</div>
                    <div>{post.post}</div>
                    <br/>
                    <hr/>
                </div>

           )
        });

        console.log(this.props)
        return(
            <div>
                <Grid className = "profile">

                    <Row>
                        <div className = "container-fluid header">

                            <Grid className = "text-center">
                                <Col sm = {4} smOffset = {4}>
                                    <div className = "prof-pic">
                                        <img src={picLocation}/>
                                    </div>

                                    <div className = "username text-center">
                                        <h3>{username}</h3>
                                        <h4>{location}</h4>
                                    </div>
                                </Col>
                            </Grid>



                            <Col sm = {5} className = "items-right">

                                <form method="post" action="http://127.0.0.1:5000/profilepic" encType="multipart/form-data">
                                    <div className="pic-sub text-center">
                                        <input name='username' type='hidden' value={this.state.userData.username} />
                                        <FileInput name = "fileUploaded"
                                                   accept = ".png,.jpg,.jpeg,.gif"
                                                   placeholder = "Choose Profile Image"
                                                   className = "InputClass"
                                                   id = "sub"
                                        />
                                        <input type = "submit" value = "Upload Image" className = "submit" />

                                    </div>
                                </form>




                            </Col>

                            <Col style={{marginTop: -5 +'%'}} md = {2} class>

                                <div className = "stats-left">
                                    <ul>
                                        <li>
                                            <Button className="btn btn-secondary" style = {{background: "white"}}><h4>{this.state.followData} Followers</h4></Button>
                                        </li>



                                    </ul>
                                </div>

                            </Col>

                        </div>
                    </Row>


                    <div className="container">
                        <div className="col-sm-12">
                            <div className="col-sm-1">

                            </div>
                            <div className="col-sm-4 row subsection">

                                <h4>About</h4>
                                <p><h5>{about}</h5></p>


                                <div className="row empty">
                                    <br/>
                                </div>

                                <h4>Follow {username} On Twitter</h4>



                                <div className="row">
                                    <div>


                                        <Timeline dataSource={{

                                            sourceType: 'profile',
                                            screenName: `${t_username}`
                                        }}

                                                  options={{

                                                      username: `${t_username}`,
                                                      height: '400'
                                                  }}


                                                  onLoad={() => console.log('Timeline is loaded!')}
                                        />


                                    </div>
                                </div>


                            </div>
                            <div className="col-sm-2">

                            </div>
                            <div className="col-sm-4 subsection">

                                <h4>Books by {username}</h4>

                                <div className="row">

                                    {bookArray}

                                </div>

                                <div className="row empty">
                                    <br/>
                                </div>

                                <h4>Message Board</h4>
                                <div className="row">

                                    <div className = "write-message-box">
                                        <Form onSubmit={this.handlePost}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <FormControl id = "post" componentClass="textarea" placeholder="Post a message..." />
                                                <button className="btn-primary btn btn-book" type='submit'>Post</button>
                                            </FormGroup>

                                        </Form>
                                    </div>
                                    <div>
                                        {postArray}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>










                </Grid>
            </div>

        )
    }
}


function mapStateToProps(state){
  return{
    characterResponse: state.characterReducer,
    registerResponse: state.registerReducer,
    postResponse: state.postReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postAction: PostAction
  }, dispatch)
}

// export default UserProfile;
export default connect(mapStateToProps,mapDispatchToProps)(tOtherUser);




