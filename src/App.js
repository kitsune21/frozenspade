import React, {Component} from 'react';
import Twitch from './Components/Twitch/Twitch';
import Twitter from './Components/Twitter/Twitter';
import Speedrun from './Components/SpeedRun/SpeedRun';
import SoundCloud from './Components/SoundCloud/SoundCloud';
import Discord from './Components/Discord/Discord';
import ItchIO from './Components/ItchIO/ItchIO';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Twitch />
        <Twitter />
        <Speedrun />
        <SoundCloud />
        <Discord />
        <ItchIO />
      </div>
    );
  }
}

export default App;
