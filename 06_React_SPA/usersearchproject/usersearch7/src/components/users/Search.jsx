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
  subimtHandler = e => {
    e.preventDefault();
    this.props.searchValue(this.state.text);
  };
  render() {
    return (
      <form onSubmit={this.subimtHandler} className='form'>
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
