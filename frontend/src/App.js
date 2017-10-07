import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Register, Login } from './containers'; 
import NavBar from './components/NavBar'; 
import { Home, Resources, Faqs, About, Loading, Footer, NewBook} from './components'

//PROFILE PAGE
import { ParentUser } from './userComponents'; 

// //WRITE MENU//
// import { WriteMenu, Character, Chapters, QueryLetter, Plot, Critique, NotePad, Synopsis} from './writemenu'; 

// //testers
// import { tCharacterBoard, tChapterBoard, tQueryLetterBoard, tPlotBoard, tCritiqueBoard, tNotePadBoard, tSynopsisBoard, tPicture, tUserProfile, NavBarTest } from './tester'; 

// //FORUMS
// import { tMainForum, tContempForum, tNewContempForm, tContempTopic } from './tester_forums'; 


class App extends Component {
  constructor() {
    super();

    this.state ={
      loading: true
    };
    
  }

  componentDidMount() {
    // this.setState({loading: false})
    setTimeout(()=> this.setState({loading: false}), 3000);
  }

  render() {
    const {loading} = this.state; 

    if(loading){
      // return null; 
      return <Loading />; //render loading when app is not ready 
    } 

    return (

      <div>
        <Router>
          <div className="App">
            <div>
              <NavBar/>
              <Route exact path = '/loading' component ={Loading}/>
              <Route exact path="/" component= {Home} /> 
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/faqs" component={Faqs} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user" component= {ParentUser} />
              <Footer/>
            </div> 
          </div>
        </Router>
      </div> 
    )
  }
}

export default App;


// <Route exact path='/test' component={NavBarTest} />
// <Route exact path = "/profile/:profile" component = {tOtherUser}/>
// <Route exact path = "/profiles/" component = {tResultsPage}/>

// <Route exact path="/write/:book" component= {writeMenu} />             
// <Route exact path="/newbook" component= {NewBook} />
// <Route exact path="/character/:book" component= {Character} />
// <Route exact path="/charboard/:book" component={tCharacterBoard} />
// <Route exact path="/synopsis/:book" component= {Synopsis} />
// <Route exact path="/synopboard/:book" component={tSynopsisBoard} />
// <Route exact path="/plot/:book" component = {Plot} />
// <Route exact path="/plotboard/:book" component={tPlotBoard} />
// <Route exact path="/chapters/:book" component={Chapters} />
// <Route exact path="/chapboard/:book" component={tChapterBoard} />
// <Route exact path="/q-letter/:book" component={QueryLetter} />
// <Route exact path="/queryboard/:book" component={tQueryLetterBoard} />
// <Route exact path="/critique/:book" component={Critique} />
// <Route exact path="/critboard/:book" component={tCritiqueBoard} />
// <Route exact path="/pictures/:book" component={tPicture} />
// <Route exact path="/notepad/:book" component={NotePad} />
// <Route exact path="/noteboard/:book" component={tNotePadBoard} />


// <Route exact path = "/forums" component = {tMainForum}/>
// <Route exact path = "/contemp" component = {tContempForum}/>
// <Route exact path = "/contempform" component = {tNewContempForm}/>
// <Route exact path = "/contemptopic" component = {tContempTopic}/>

