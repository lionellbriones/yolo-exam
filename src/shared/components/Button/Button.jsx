import React from "react";

import "./Button.css";

const Button = ({ children, ...props }) => (
  <button className="SearchButton">Filter results</button>
);

Button.defaultProps = {};

export default Button;
