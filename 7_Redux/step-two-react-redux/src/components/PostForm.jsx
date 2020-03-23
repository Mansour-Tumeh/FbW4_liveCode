import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <>
        <h1>Add Post</h1>
        <form onSubmit={this.props.submitHandler}>
          <div>
            <label htmlFor='title'>Title: </label>
            <br />
            <input name='title' type='text' />
          </div>
          <br />
          <div>
            <label htmlFor='body'>Body: </label>
            <br />
            <input name='body' type='text' />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

export default PostForm;
