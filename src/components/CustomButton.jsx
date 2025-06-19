import React from "react";

function CustomButton(props) {
  return (
    <button className=" text-white font-bold px-4 py-2 rounded hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
    style={{ backgroundColor: props.color }}
    >{props.text}</button>
  );
}

export default CustomButton;
