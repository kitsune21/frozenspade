import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const TwitchPlayer = ({channel}) => (
  <ReactTwitchEmbedVideo 
    channel={channel}
    width="100%"
    height={window.innerHeight - 55}
  />
)

export default TwitchPlayer;