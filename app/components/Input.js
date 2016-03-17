import React from 'react';
import { inputRequest } from '../actions/AppAction';

const Input = () => {
  return (
    <input
      type="text"
      placeholder="Введіть запит…"
      autoFocus={true}
      onBlur={inputRequest}
      onKeyPress={ e => {
        if (e.key === 'Enter') {
          inputRequest(e);
        }
      }}/>
  )
}

export default Input;
