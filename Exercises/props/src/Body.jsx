import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div>
        <input name='title' type='text' onChange={this.props.changeHandler} />

        <input name='footer' type='text' onChange={this.props.changeHandler} />
      </div>
    );
  }
}

export default Body;
