import React from "react";

function Display(props) {
  return (
    <>
      <h3>Score Console</h3>
      <div className="display">
        <p>Strikes: {props.strikes}</p>
        <p>balls: {props.balls}</p>
        <p>outs: {props.outs}</p>
      </div>
    </>
  );
}

export default Display;
