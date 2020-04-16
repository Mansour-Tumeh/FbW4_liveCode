import React from 'react';

const CounterControl = props => {
  // onClick={props.clickHandler}
  return (
    <div className='CounterControl' onClick={props.clickHandler}>
      {props.label}
    </div>
  );
};

export default CounterControl;
