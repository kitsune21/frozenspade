import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul `
  list-style-type: none;
  padding-left: 10px;
`

const Li = styled.li `
  display: inline;
  padding: 5px; 
  float: left;
`
const Title = styled.h2 `
  float: left;
  margin-left: 10px;
  margin-right: 10px;
`

class NavBar extends Component {
 render() {
    return(
      <div style={{width: window.innerWidth}}>
        <Title>FrozenSpade.TV</Title>
        <Ul>
          <Li><Link to='/'>Twitch</Link></Li>
          <Li><Link to='/twitter'>Twitter</Link></Li>
          <Li><Link to='/speedrun'>SpeedRun.Com</Link></Li>
          <Li><Link to='/discord'>Discord</Link></Li>
        </Ul>
      </div>
    )
  }
}

export default NavBar;