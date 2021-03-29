import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './app.css'

import VideoPlayer from './practice-components/VideoPlayer.jsx';
//import MainPage from './practice-components/MainPage.jsx';
//import EmailPage from "./practice-components/EmailConfirmation.jsx";
import MusicQuiz from './practice-components/MusicQuiz.jsx';
import TimeQuiz from "./practice-components/TimeQuiz.jsx";
//import FormPraccy from './practice-components/FormPraccy.jsx';
import SmileyFace from './practice-components/Smiley.jsx';
import DragDrop from './practice-components/DragAndDrop';
import Home from './practice-components/Home';
import SlideShow from './practice-components/SlideShow.jsx'
import Images from './practice-components/Images'

class App extends React.Component {
  render() {
    return (
      <div >
        <Router>
          <div className='nav-holder'>
          <Link className="links" to="/">HOME</Link>
          <Link className="links" to="/SmileyFace">Smiley Face</Link>
          <Link className="links"to="/TimeQuiz">TimeQuiz</Link>
          <Link className="links"to="/VideoPlayer">Video Player</Link>
          <Link className="links"to="/SlideShow">SlideShow</Link>
          <Link className="links"to="/MusicQuiz">Music Quiz</Link>
          <Link className="links"to="/Test">TEST</Link>
          </div>

        

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/SmileyFace">
              <SmileyFace />
            </Route>

            <Route path="/TimeQuiz">
              <TimeQuiz />
            </Route>

            <Route path="/VideoPlayer">
              <VideoPlayer/>
            </Route>

            <Route path="/SlideShow">
              <SlideShow pictures={Images}/>
            </Route>

            <Route path="/MusicQuiz">
              <MusicQuiz />
            </Route>

            <Route path="/Test">
            <DragDrop/>
            </Route>
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
