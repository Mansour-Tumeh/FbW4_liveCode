import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts.jsx';
import PostForm from './components/PostForm.jsx';
class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({
      posts: res.data
    });
  }
  submitHandler = async e => {
    //handel the submit event in PostForm
    e.preventDefault();
    const res = await axios({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        title: e.target.title.value,
        body: e.target.body.value
      }
    });
    //const { posts } = this.state;
    const temp = this.state.posts;
    temp.unshift(res.data);
    this.setState({
      posts: temp
      //posts: posts.unshift(res.data)
    });
  };
  render() {
    const { posts } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Redux-React example</h2>
        </header>
        <PostForm submitHandler={this.submitHandler} />
        <hr />
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
