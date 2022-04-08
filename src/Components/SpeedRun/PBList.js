import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'; 

import PBEntry from './PBEntry';

const TH = styled.th `
  border-bottom: 2px solid #D4FF00;
  color: #D4FF00;
`

class PBList extends Component {
   
  state = {pbs: []}

  componentDidMount() {
    axios({
      method: 'get',
      url: this.props.pbURL
    })
      .then( res => {
        this.sortData(res.data.data)
      })
      .catch( err => {
        console.log(err)
      })
  }

  sortData = data => {
    let dataList = data.sort((a, b) => (a.place > b.place) ? 1 : -1)
    let placeBuckets = [[]]
    let finalList = []
    let currentPlace = 0
    let listIndex = -1
    dataList.forEach(entry => {
      if(entry.place > currentPlace) {
        currentPlace = entry.place
        listIndex += 1
        placeBuckets[listIndex] = [entry]
      } else {
        placeBuckets[listIndex].push(entry)
      }
      
    })
    placeBuckets.forEach(bucket => {
      bucket.sort((a, b) => (a.run.game > b.run.game) ? 1 : -1)
      bucket.forEach(entry => {
        finalList.push(entry)
      })
    })
    this.setState({pbs: finalList})
  }

  render() {
    return(
      <div style={{height: '90%', marginLeft: window.innerWidth / 4}}>
        <br />
        <table>
          <thead>
            <tr>
              <TH>Game</TH>
              <TH>Title</TH>
              <TH>Category</TH>
              <TH>Current Place</TH>
              <TH>Time</TH>
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