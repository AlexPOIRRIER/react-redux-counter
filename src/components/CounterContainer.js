import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) =>
  <>
    <div>{counter}</div>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    <button onClick={() => dispatch({ type: 'INCREMENT_TEN' })}>ADD 10</button>
    <button onClick={() => dispatch({ type: 'DECREMENT_TEN' })}>REMOVE 10</button>
    <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
  </>
export default connect(mapStateToProps)(CounterComponent);