/** @format */

import React from 'react';

const Button = ({ innerText, onClick }) => {
  return <button className="btn btn-primary" onClick={onClick}>{innerText}</button>;
};

export default Button;
