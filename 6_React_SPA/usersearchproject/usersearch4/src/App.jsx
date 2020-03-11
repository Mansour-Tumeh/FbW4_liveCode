import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import axios from 'axios';
import Users from './components/users/Users.jsx';
//having one state for our all react application
class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
