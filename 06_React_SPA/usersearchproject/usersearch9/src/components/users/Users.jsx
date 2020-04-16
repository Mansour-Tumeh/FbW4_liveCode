import React from 'react';
import Useritem from './Useritem.jsx';
import Spinner from '../layout/Spinner.jsx';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(item => (
        <Useritem key={item.id} user={item} />
      ))}
    </div>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
export default Users;
