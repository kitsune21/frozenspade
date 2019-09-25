import React, {Component} from 'react';
import axios from 'axios';
import TwitchClip from './TwitchClip';

class TwitchClips extends Component {

  state = { clips: [] }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.twitch.tv/helix/clips?broadcaster_id=21287691',
      headers: {'client-ID': 'et2sq9tumc16mfy2oxmn0jw88lemb9'}
    })
      .then( res => {
        this.setState({ clips: res.data.data })
        console.log(res.data.data)
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div>
        {this.state.clips.map(clip => <TwitchClip key={clip.id} clip={clip}/>)}
      </div>
    )
  }
}

export default TwitchClips;