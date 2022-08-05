import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Display } from './components/Display';
import { Clear } from './components/Clear';
import * as math from 'mathjs';

function App() {
  const [display, setDisplay] = useState('');
  const [errorState, setErrorState] = useState(null);

  const addToDisplay = (val) => {
    try {
      setDisplay(display + val);
    } catch (error) {
      setErrorState(`Oops, something went wrong! '${error}'.`);
    }
  };

  const handleNegativeSign = () => {
    try {
      setDisplay('-' + display);
    } catch (error) {
      setErrorState(`Oops, something went wrong! '${error}'.`);
    }
  };

  const calculate = () => {
    try {
      setDisplay(math.evaluate(display));
    } catch (error) {
      setErrorState(`Oops, something went wrong! '${error}'.`);
    }
  };

  return (
    <div className="app">
      <div className="calc">
        <div
          style={{
            color: 'rgb(222, 148, 70)',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 'bold',
          }}
        > Calculator
        </div>
        <div style={{ color: 'red', textAlign: 'center', padding: '15px' }}>
          {errorState ? errorState : ''}
        </div>
        <Display display={display}></Display>
        <div className="row">
          <Clear
            handleClear={() => {
              setDisplay('');
              setErrorState('');
            }}
          >
            AC
          </Clear>
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
          <Button handleClick={addToDisplay}>.</Button>
          <Button handleClick={addToDisplay}>^</Button>
          <Button handleClick={calculate}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
