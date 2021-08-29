import React from "react";

export const Button = ({ handleClick}) => {
  return (
    <button type="button" onClick={handleClick}>
      Add ToDo Item
    </button>
  );
};
