import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (label) => {
    setDisplay(display + label);
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display)); // Use a safer method for real applications
    } catch {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  const buttons = [
    ['(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '÷'],
    ['2nd', 'x2', 'x3', 'xy', 'ex', '10x', '7', '8', '9', 'X'],
    ['1/x', '2√x', '3√x', 'y√x', 'ln', 'log10', '4', '5', '6', '-'],
    ['x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+'],
    ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=']
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.flat().map((label) => (
          <Button
            key={label}
            label={label}
            onClick={label === '=' ? handleEqual : label === 'C' ? handleClear : handleClick}
            className={label === '=' ? 'equal' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
