import React from "react";

export const Input = ({ handleChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Please type ToDo item"
      onChange={handleChange}
      value={value}
    />
  );
};
