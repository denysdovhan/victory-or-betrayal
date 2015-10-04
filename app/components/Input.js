import React from 'react';
import AppAction from '../actions/AppAction';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.checkEnter = this.checkEnter.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      console.log('Enter clicked!');
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    AppAction.inputRequest(e.target.value);
  }

  render () {
    return (
      <input
        type="text"
        placeholder="Введіть запит…"
        autoFocus={true}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}/>
    )
  }
}

export default Input;
