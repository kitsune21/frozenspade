import React, {Component} from 'react';
import axios from 'axios';
import TwitchClip from './TwitchClip';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

class TwitchClips extends Component {

  state = { clips: [], clipNumber: 0 }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.twitch.tv/helix/clips?broadcaster_id=21287691',
      headers: {'client-ID': 'et2sq9tumc16mfy2oxmn0jw88lemb9'}
    })
      .then( res => {
        this.setState({ clips: res.data.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  nextClip = () => {
    if(this.state.clipNumber < this.state.clips.length - 1) {
      this.setState({ clipNumber: this.state.clipNumber + 1})
    }
  } 
  
  previousClip = () => {
    if(this.state.clipNumber > 0 ) {
      this.setState({ clipNumber: this.state.clipNumber - 1})
    }
  }

  render() {
    const { clips, clipNumber } = this.state;
    return(
      <Container>
        <Segment.Group>
          <Segment>
            <Header>Twitch Clips</Header>
          </Segment>
          <Segment.Inline>
            <Button onClick={() => this.previousClip()}>-</Button>
            <p>{this.state.clipNumber + 1}/{this.state.clips.length}</p>
            {clips.length > 0 ? <TwitchClip clip={clips[clipNumber]} /> : null}
            <Button onClick={() => this.nextClip()}>+</Button>
          </Segment.Inline>
        </Segment.Group>
      </Container>
    )
  }
}

export default TwitchClips;