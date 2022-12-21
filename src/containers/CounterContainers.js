import React from "react";
import { connect } from "react-redux";
import { Counter } from "../components/Counter";
import {
  // increase,
  // decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

const CounterContainers = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    ></Counter>
  );
};

export default connect(
  // mapStateToProps
  (state) => ({
    number: state.counter,
  }),
  // mapDispatchToProps
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainers);
