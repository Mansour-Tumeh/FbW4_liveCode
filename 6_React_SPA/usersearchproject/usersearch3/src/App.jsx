import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';

import Users from './components/users/Users.jsx';
class App extends Component {
  render() {
    //const title = 'User Search';
    //const number = [1, 2, 3, 4];
    return (
      <div>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
