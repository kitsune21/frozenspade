import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

class Twitter extends Component {
  render() {
    return(
      <div>
        <p>Twitter</p>
        <TwitterFollowButton screenName="frozenspade"/>
        <TwitterTimelineEmbed sourceType="profile" screenName="frozenspade" options={{height: 400}}/>
      </div>
    )
  }
}

export default Twitter;