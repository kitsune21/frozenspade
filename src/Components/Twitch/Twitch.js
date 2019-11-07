import React, { Component } from 'react';
import TwitchPlayer from './TwitchPlayer';
// import TwitchClips from './TwitchClips';
import axios from 'axios';

class Twitch extends Component {

  state = { channel: 'frozenspade'}

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://api.twitch.tv/helix/users/${this.state.channel}`,
      headers: {'client-ID': 'et2sq9tumc16mfy2oxmn0jw88lemb9'}
    })
      .then( res => {
        this.setState({ user: res.data })
        console.log(res.data.data)
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div>
        <TwitchPlayer channel={this.state.channel}/>
        {/* <TwitchClips /> */}
      </div>
    )
  }
}

export default Twitch;