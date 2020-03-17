import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

import './App.css';

class Father extends Component {
  state = {
    title: 'My Header Title'
  };
  myDefinition = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    return (
      <Fragment className='App'>
        <Header title={this.state.title} />
        <Body newValue={this.state.title} changeHandler={this.myDefinition} />
      </Fragment>
    );
  }
}

export default Father;
