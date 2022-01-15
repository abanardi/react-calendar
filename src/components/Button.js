/** @format */

import React from 'react';

const Button = ({ className, innerText, onClick }) => {
  return <button className={"btn " + className} onClick={onClick}>{innerText}</button>;
};

export default Button;
