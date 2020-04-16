import React from 'react';
import PropTypes from 'prop-types';

const Body = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <label htmlFor='email'>Email : </label>
      <input name='email' type='text' />
      <label htmlFor='password'>Password : </label>
      <input name='password' type='text' />
      <input type='submit' value='Submit' />
    </form>
  );
};
Body.propTypes = {
  submitHandler: PropTypes.func.isRequired
};
export default Body;
