import React from 'react';

const Input = ({ value, changeHandler, requersHandler }) => {
  return (
    <input
      type='text'
      placeholder='Введіть запит…'
      value={ value }
      autoFocus={ true }
      onChange={ e => {
        changeHandler(e.target.value);
      }}
      onBlur={ e => {
        requersHandler(e.target.value);
      }}
      onKeyPress={ e => {
        if (e.key === 'Enter') {
          requersHandler(e.target.value);
        }
      }}/>
  )
}

export default Input;
