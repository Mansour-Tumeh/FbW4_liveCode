import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  //defining a default props
  static defaultProps = {
    title: 'User Search',
    icon: 'fab fa-github'
  };

  //defining a the type of my props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
