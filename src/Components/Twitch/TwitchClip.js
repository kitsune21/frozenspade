import React from 'react';
import Iframe from 'react-iframe';

const TwitchClip = ({clip}) => (
  <div>
    <Iframe url={'https://clips.twitch.tv/embed?clip=' + clip.id}/>
  </div>
)

export default TwitchClip;