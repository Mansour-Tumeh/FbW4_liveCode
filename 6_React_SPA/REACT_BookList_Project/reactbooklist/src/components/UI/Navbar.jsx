import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <ul className='row mx-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            <h3>Add Book</h3>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/Table'>
            <h3>Book List</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
