import React from "react";

function Box(props) {
  return (
    <div className="box">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Box;
