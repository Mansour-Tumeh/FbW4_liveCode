import React, { Component } from 'react';
import CounterControl from './CounterControl.jsx';
import CounterOutPut from './CounterOutPut.jsx';
import { connect } from 'react-redux';
import { addOne, subOne, addFive, subFive } from '../actions/counterAction';
export class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutPut value={this.props.counter} />
        <CounterControl label='Increment' clickHandler={this.props.addOne} />
        <CounterControl label='Decrement' clickHandler={this.props.subOne} />
        <CounterControl label='Add 5' clickHandler={this.props.addFive} />
        <CounterControl label='Subtract 5' clickHandler={this.props.subFive} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  counter: state.counter.counter
});
export default connect(mapStateToProps, { addOne, subOne, addFive, subFive })(
  Counter
);
