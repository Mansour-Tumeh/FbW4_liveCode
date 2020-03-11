import React from 'react';
import Useritem from './Useritem.jsx';
const Users = ({ users }) => {
  return (
    <div style={userStyle}>
      {users.map(item => (
        <Useritem key={item.id} user={item} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
export default Users;
