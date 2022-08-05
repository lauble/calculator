import React from 'react';
import '../App.css';

export const Clear = (props) => {
  return (
    <div className="clear" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};