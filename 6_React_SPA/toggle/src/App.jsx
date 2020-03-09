import React, { Fragment, Component } from 'react';

import './App.css';
import Light from './Light.jsx';

class App extends Component {
  state = { isToggleOn: true };

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <Fragment>
        <Light />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </Fragment>
    );
  }
}

export default App;
