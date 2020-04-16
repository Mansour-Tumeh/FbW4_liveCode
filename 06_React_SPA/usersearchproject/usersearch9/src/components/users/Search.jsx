import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };
  static propTypes = {
    searchValue: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  subimtHandler = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchValue(this.state.text);
      this.setState({
        text: ''
      });
    }
  };
  render() {
    return (
      <>
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
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </>
    );
  }
}

export default Search;
