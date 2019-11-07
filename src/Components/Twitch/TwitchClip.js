import React from 'react';
import Iframe from 'react-iframe';
import styled from 'styled-components';

const Ul = styled.ul `
  list-style-type: none;
`

const TwitchClip = ({clip}) => (
  <Ul style={{paddingLeft: window.innerWidth * 0.25}}>
    <li style={{float: 'left'}}>Next</li>
    <li><Iframe url={'https://clips.twitch.tv/embed?clip=' + clip.id} width={window.innerWidth / 2} height={window.innerHeight / 2}/></li>
    <li style={{float: 'right'}}>Previous</li>
  </Ul>
)

export default TwitchClip;