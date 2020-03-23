import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

import PropTypes from 'prop-types';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // submitHandler = async e => {
  //   this.setState({
  //     post: {
  //       title: e.target.title.value,
  //       body: e.target.body.value
  //     }
  //   });
  //   e.preventDefault();
  //   const res = await axios({
  //     method: 'POST',
  //     url: 'https://jsonplaceholder.typicode.com/posts',
  //     data: {
  //       title: e.target.title.value,
  //       body: e.target.body.value
  //     }
  //   });
  //   const tempArr = this.state.posts;
  //   tempArr.unshift(res.data);
  //   this.setState({
  //     posts: tempArr,
  //     post: res.data
  //   });
  // };

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <>
        <h1>Posts</h1>
        {postItems}
      </>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

//add the (state) from redux to the (props) of Posts.jsx
const mapStateToProps = state => ({
  posts: state.posts.items
  //newPost : state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
