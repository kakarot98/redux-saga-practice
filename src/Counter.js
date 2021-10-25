import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const increaseCounter = () => {
    dispatch(increment());
  };

  const decreaseCounter = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      {count}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={(e) => increaseCounter()}>Increase</button>
        <button onClick={(e) => decreaseCounter()}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
