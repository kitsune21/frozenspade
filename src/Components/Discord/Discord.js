import React, { Component } from 'react';

class Discord extends Component {
  render() {
    return(
      <div style={{paddingTop: (window.innerWidth / 4) - 60, paddingBottom: window.innerWidth / 4}}>
        <br />
        <a href='https://discord.gg/ZhdEZh9' target={'_blank'}><h2 style={{color: '#D4FF00'}}>Come join our Discord server!</h2></a>
        <p>Come talk about your favorite games, find a group to try out a new game, or find out the latest strats for the games that I speed run!</p>
      </div>
    )
  }
}

export default Discord;