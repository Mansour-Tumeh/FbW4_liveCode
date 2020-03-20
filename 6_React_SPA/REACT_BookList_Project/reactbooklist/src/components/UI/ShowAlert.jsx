import React from 'react';
import PropTypes from 'prop-types';

const ShowAlert = ({ alert }) => {
  return (
    alert !== null && (
      <>
        <div className={`alert text-${alert.type} text-center`}>
          {alert.msg}
        </div>
      </>
    )
  );
};

ShowAlert.prototype = {
  alert: PropTypes.object.isRequired
};

export default ShowAlert;
