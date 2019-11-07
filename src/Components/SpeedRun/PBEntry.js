import React, { Component } from 'react';
import axios from 'axios';

class PBEntry extends Component {

  state = {
    pb: [],
    gameName: '',
    gameImg: '',
    categoryName: '',
  }

  componentDidMount() {
    this.pullGame();
    this.pullCategory();
  }

  pullGame = () => {
    axios({
      method: 'get',
      url: `https://www.speedrun.com/api/v1/games/${this.props.game_id}`
    })
      .then( res => {
        this.setState({ 
          pb: res.data.data, 
          gameName: res.data.data.names.international, 
          gameImg: res.data.data.assets['cover-medium'].uri })
      })
      .catch( err => {
        console.log(err)
      })
  }

  pullCategory = () => {
    axios({
      method: 'get',
      url: `https://www.speedrun.com/api/v1/categories/${this.props.category_id}`
    })
      .then( res => {
        this.setState({ categoryName: res.data.data.name})
      })
      .catch( err => {
        console.log(err)
      })
  }

  secondsToHms = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
  }

  placeRender = (placement) => {
    const placings = ['0', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th'];
    return placings[placement];
  }

  render() {
    return(
      <tr>
        <td><a href={this.props.video_link} target={'_blank'}><img alt='Hi' src={this.state.gameImg}/></a></td>
        <td>{this.state.gameName}</td>
        <td>{this.state.categoryName}</td>
        <td>{this.placeRender(this.props.place)}</td>
        <td>{this.secondsToHms(this.props.time)}</td>
      </tr>
    )
  }
}

export default PBEntry;