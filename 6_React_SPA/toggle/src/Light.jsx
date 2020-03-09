import React, { Fragment, Component } from 'react';
import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';

class Light extends Component {
  state = { isToggleOn: false };
  changeImage = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <Fragment>
        <img
          id='myImage'
          onClick={this.changeImage}
          src={this.state.isToggleOn ? lightOn : lightOff}
          width='100'
          height='180'
        ></img>
      </Fragment>
    );
  }
}

export default Light;
