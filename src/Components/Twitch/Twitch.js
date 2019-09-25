import React, { Component } from 'react';
import TwitchPlayer from './TwitchPlayer';
import TwitchClips from './TwitchClips';

class Twitch extends Component {
  render() {
    return(
      <div>
        <TwitchPlayer />
        <TwitchClips />
      </div>
    )
  }
}

export default Twitch;