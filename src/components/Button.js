import React from 'react';
import '../App.css';

const buttonType = (val) => {
  return !isNaN(val) || val === '.' || val === undefined;
};

export const Button = (props) => {
  return (
    <div className={`${buttonType(props.children) ? 'button' : 'operator'}`} onClick={() => props.handleClick(props.children)} >
      {props.children}
    </div>
  );
};