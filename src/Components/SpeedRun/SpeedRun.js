import React, { Component } from 'react';
import axios from 'axios';

import PBList from './PBList';

class SpeedRun extends Component {

  state = { user: ''}

componentDidMount() {
  axios({
    method: 'get',
    url: "https://www.speedrun.com/api/v1/users?name=frozenspade"
  })
    .then( res => {
      this.setState({user: res.data.data})
    })
    .catch( err => {
      console.log(err)
    })
}

  render() {
    return(
      <div>
        <br />
        <PBList pbURL={"https://www.speedrun.com/api/v1/users/18vkrd5j/personal-bests"}/>
      </div>
    )
  }
}

export default SpeedRun;