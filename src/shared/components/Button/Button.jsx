import React from "react";

import "./Button.css";

const Button = ({ children, ...props }) => (
  <button type="submit" className="SearchButton" {...props}>
    {children}
  </button>
);

Button.defaultProps = {};

export default Button;
