import React, { Component } from 'react';
import axios from 'axios'; 

import PBEntry from './PBEntry';

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
      <div>
        <br />
        <p>Personal Bests:</p>
        <table style={{marginLeft: window.innerWidth / 4, height: window.innerHeight, overflowY: 'scroll'}}>
          <thead>
            <tr>
              <th>Game</th>
              <th>Title</th>
              <th>Category</th>
              <th>Current Place</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    )
  }
}

export default PBList;