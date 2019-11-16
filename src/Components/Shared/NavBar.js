import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul `
  list-style-type: none;
  padding-left: 50px;
`

const Li = styled.li `
  display: inline;
  padding: 8px; 
  float: left;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-radius: 8px;
  border-color: #2f9fd6;

  &:hover {
    color: white;
  }
`
const Title = styled.h2 `
  float: left;
  margin-left: 10px;
  margin-right: 30px;
  color: #2f9fd6;
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