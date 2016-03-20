import React from 'react';
import { updateInputValue, inputRequest } from '../actions/AppAction';

const Input = ({ value }) => {
  return (
    <input
      type="text"
      placeholder="Введіть запит…"
      value={ value }
      autoFocus={ true }
      onChange={ e => {
        updateInputValue(e.target.value);
      }}
      onBlur={ e => {
        inputRequest(e.target.value)
      }}
      onKeyPress={ e => {
        if (e.key === 'Enter') {
          inputRequest(e.target.value);
        }
      }}/>
  )
}

export default Input;
