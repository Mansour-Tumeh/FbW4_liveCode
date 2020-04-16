import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon}></i>
        </Link>
        {title}
      </h1>
      <h1>
        <Link to='/about'>About</Link>
      </h1>
    </nav>
  );
};
//defining a default props
Navbar.defaultProps = {
  title: 'User Search',
  icon: 'fab fa-github'
};

//defining a the type of my props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
