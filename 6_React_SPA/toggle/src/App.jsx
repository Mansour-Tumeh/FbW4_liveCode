import React, { Component } from 'react';

import './App.css';
import Light from './Light.jsx';
class App extends Component {
  state = { isToggleOn: true };
  changeToggle = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  render() {
    return (
      <>
        <Light isToggleOn={this.state.isToggleOn} />
        <button onClick={this.changeToggle}>
          {this.state.isToggleOn ? 'OFF' : 'ON'}
        </button>
      </>
    );
  }
}

export default App;
