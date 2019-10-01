import React, {Component} from 'react';
import Twitch from './Components/Twitch/Twitch';
import Twitter from './Components/Twitter/Twitter';
import Speedrun from './Components/SpeedRun/SpeedRun';
import SoundCloud from './Components/SoundCloud/SoundCloud';
import Discord from './Components/Discord/Discord';
import ItchIO from './Components/ItchIO/ItchIO';
import YouTube from './Components/YouTube/YouTube';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>FrozenSpade.TV</h2>
        </div>
        <Twitch />
        <Twitter />
        <Speedrun />
        <SoundCloud />
        <Discord />
        <ItchIO />
        <YouTube />
      </div>
    );
  }
}

export default App;
