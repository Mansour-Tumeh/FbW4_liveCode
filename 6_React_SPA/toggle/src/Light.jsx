import React, { Component } from 'react';
import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';

class Light extends Component {
  render() {
    return (
      <img
        width='100'
        height='180'
        src={this.props.isToggleOn ? lightOn : lightOff}
      />
    );
  }
}

export default Light;
