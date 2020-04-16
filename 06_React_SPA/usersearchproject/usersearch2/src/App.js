import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    //const title = 'User Search';
    return (
      <div>
        <Navbar title='my test' />
      </div>
    );
  }
}

export default App;
