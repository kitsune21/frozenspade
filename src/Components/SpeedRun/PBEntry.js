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

  render() {
    return(
      <div>
        <a href={this.props.video_link} target={'_blank'}><img alt='Hi' src={this.state.gameImg}/></a>
        <p>{this.state.gameName}</p>
        <p>{this.state.categoryName}</p>
        <p>Place: {this.props.place} Time: {this.props.time}</p>
      </div>
    )
  }
}

export default PBEntry;