import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Display } from './components/Display';
import { Clear } from './components/Clear';
import * as math from 'mathjs';

function App() {
  const [display, setDisplay] = useState('');
  const addToDisplay = (val) => {
    setDisplay(display + val);
  }

  const handleNegativeSign = () => {
    setDisplay('-' + display)
  }

  const calculate = () => {
    setDisplay(math.evaluate(display))
  }

  return (
    <div className="app">
      <div className="calc">
        <Display display={display}></Display>
        <div className="row">
          <Clear handleClear={() => setDisplay('')}>AC</Clear>
          <Button handleClick={handleNegativeSign}>+/-</Button>
          <Button handleClick={addToDisplay}>%</Button>
          <Button handleClick={addToDisplay}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>7</Button>
          <Button handleClick={addToDisplay}>8</Button>
          <Button handleClick={addToDisplay}>9</Button>
          <Button handleClick={addToDisplay}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>4</Button>
          <Button handleClick={addToDisplay}>5</Button>
          <Button handleClick={addToDisplay}>6</Button>
          <Button handleClick={addToDisplay}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>1</Button>
          <Button handleClick={addToDisplay}>2</Button>
          <Button handleClick={addToDisplay}>3</Button>
          <Button handleClick={addToDisplay}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToDisplay}>0</Button>
          <Button handleClick={addToDisplay}></Button>
          <Button handleClick={addToDisplay}>.</Button>
          <Button handleClick={calculate}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;