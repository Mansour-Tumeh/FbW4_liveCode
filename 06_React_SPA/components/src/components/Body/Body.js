import React, { Component } from 'react';
import './Body.css';

import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import Article from '../Article/Article';

class Body extends Component {
  state = {
    title: ''
  };
  Handlemessage = value => {
    this.setState({
      title: value
    });
  };
  render() {
    return (
      <div className='Body'>
        <LeftSide newItem={this.state.title} />
        <Article messageToApp={this.Handlemessage} />
        <RightSide />
      </div>
    );
  }
}
export default Body;
