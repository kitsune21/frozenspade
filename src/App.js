import React, {Component} from 'react';
import { Switch, Route, } from 'react-router-dom';
import NavBar from './Components/Shared/NavBar'
import Twitch from './Components/Twitch/Twitch';
import Twitter from './Components/Twitter/Twitter';
import Speedrun from './Components/SpeedRun/SpeedRun';
import Discord from './Components/Discord/Discord';
import './App.css';
import styled from 'styled-components';

const DIV = styled.div `
  background-image: linear-gradient(to right, #00008e ,#00d4ff);
  text-color: blue;
`

class App extends Component {
  render() {
    return (
      <DIV className="App">
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/' component={Twitch} />
          <Route exact path='/speedrun' component={Speedrun} />
          <Route exact path='/twitter' component={Twitter} />
          <Route exact path='/discord' component={Discord} />
        </Switch>
      </DIV>
    );
  }
}

export default App;
