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
        <p>Personal Bests:</p>
        {
          this.state.pbs.map( pb => <PBEntry 
            key={pb.run.id} 
            game_id={pb.run.game} 
            category_id={pb.run.category} 
            video_link={pb.run.videos.links[0].uri}
            time={pb.run.times.primary}
            place={pb.place} 
            />)
        }
      </div>
    )
  }
}

export default PBList;