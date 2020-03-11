import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form className='form'>
        <input
          type='text'
          name='text'
          value={this.state.text}
          placeholder='Search Users ...'
          onChange={this.changeHandler}
        />
        <input
          className='btn btn-dark btn-block'
          type='submit'
          value='Search'
        />
      </form>
    );
  }
}

export default Search;
