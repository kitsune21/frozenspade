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
  border-color: #D4FF00;

  &:hover {
    color: #D4FF00;
  }
`
const Title = styled.h1 `
  float: left;
  margin-left: 10px;
  margin-right: 30px;
  color: white;
  text-shadow: 1px 1px #D4FF00;
`

class NavBar extends Component {
 render() {
    return(
      <div style={{width: window.innerWidth}}>
        <Title>FrozenSpade.TV</Title>
        <Ul>
          <Li><Link to='/'>Twitch</Link></Li>
          <Li><Link to='/twitter'>Twitter</Link></Li>
          <Li><Link to='/speedrun'>Speed Run WRs & PBs</Link></Li>
          <Li><Link to='/discord'>Discord</Link></Li>
        </Ul>
      </div>
    )
  }
}

export default NavBar;