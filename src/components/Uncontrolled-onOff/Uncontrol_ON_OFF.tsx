import React, { useState } from "react";

const Uncontrolled_ON_OFF = () => {
  const [on, setOn] = useState(false);

  const onClick_ON_Handler = () => {
    setOn(true);
  };

  const onClick_OFF_Handler = () => {
    setOn(false);
  };

  const onButtonStyle = {
    height: "30px",
    width: "100px",
    backgroundColor: on ? "green" : "white",
  };

  const offButtonStyle = {
    height: "30px",
    width: "100px",
    backgroundColor: on ? "white" : "red",

    marginRight: "20px",
  };

  const circleStyle = {
    height: "20px",
    width: "20px",
    border: "2px solid black",
    borderRadius: "15px",
    backgroundColor: on ? "green" : "red",
  };

  return (
    <div>
      <h1>useState - Uncontrolled ON_OFF</h1>
      <div>
        <button style={onButtonStyle} onClick={onClick_ON_Handler}>
          ON
        </button>
        <button style={offButtonStyle} onClick={onClick_OFF_Handler}>
          OFF
        </button>
        <button style={circleStyle}></button>
      </div>
    </div>
  );
};

export default Uncontrolled_ON_OFF;
