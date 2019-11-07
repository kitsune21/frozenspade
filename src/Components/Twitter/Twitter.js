import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

class Twitter extends Component {
  render() {
    return(
      <div style={{height: window.innerHeight, width: window.innerWidth}}>
        <br />
        <TwitterFollowButton screenName="frozenspade"/>
        <TwitterTimelineEmbed sourceType="profile" screenName="frozenspade" options={{height: window.innerHeight * 0.9, width: window.innerWidth * 0.75}}/>
      </div> 
    )
  }
}

export default Twitter;