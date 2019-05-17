import React from "react";

import "./Button.css";

const Button = ({ children, ...props }) => (
  <button className="SearchButton" {...props}>
    {children}
  </button>
);

Button.defaultProps = {};

export default Button;
