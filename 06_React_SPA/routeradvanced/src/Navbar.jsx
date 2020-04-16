import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <h1>Simple Router</h1>
      <Link to='/home'>Home</Link>
      <Link to='/body'>Inputs</Link>
    </nav>
  );
};

export default Navbar;
