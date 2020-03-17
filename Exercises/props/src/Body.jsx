import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.props.changeHandler}
          placeholder={this.props.newValue}
        />
      </div>
    );
  }
}

export default Body;
