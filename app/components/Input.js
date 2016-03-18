import React from 'react';
import { inputRequest } from '../actions/AppAction';

const Input = () => {
  return (
    <input
      type="text"
      placeholder="Введіть запит…"
      autoFocus={true}
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
