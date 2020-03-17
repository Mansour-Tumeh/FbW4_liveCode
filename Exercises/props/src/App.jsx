import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

import './App.css';

class Father extends Component {
  state = {
    title: 'My Header Title',
    footer: 'the footer'
  };
  myDefinition = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Fragment className='App'>
        <Header title={this.state.title} />
        <Body changeHandler={this.myDefinition} />
        <Footer footer={this.state.footer} />
      </Fragment>
    );
  }
}

export default Father;
