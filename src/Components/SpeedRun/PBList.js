import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'; 

import PBEntry from './PBEntry';

const TH = styled.th `
  border-bottom: 2px solid #2f9fd6;
  color: #2f9fd6;
`

class PBList extends Component {
   
  state = {pbs: []}

  componentDidMount() {
    axios({
      method: 'get',
      url: this.props.pbURL
    })
      .then( res => {
        console.log(res)
        res.data.data.sort((a, b) => (a.run.game > b.run.game) ? 1 : -1)
        this.setState({ pbs: res.data.data})
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div style={{height: '90%', marginLeft: window.innerWidth / 4}}>
        <br />
        <table>
          <tr>
            <TH>Game</TH>
            <TH>Title</TH>
            <TH>Category</TH>
            <TH>Current Place</TH>
            <TH>Time</TH>
          </tr>
          {
            this.state.pbs.map( pb => <PBEntry 
              key={pb.run.id} 
              game_id={pb.run.game} 
              category_id={pb.run.category} 
              video_link={pb.run.videos.links[0].uri}
              time={pb.run.times.realtime_t}
              place={pb.place} 
              />)
            }
        </table>
      </div>
    )
  }
}

export default PBList;