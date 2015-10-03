import React from 'react';
import AppAction from '../actions/AppAction';

class Input extends React.Component {

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.props.onEnter(e);
    }
  }

  finishEdit(e) {
    AppAction.inputRequest(e.target.value);
  }

  render () {
    return (
      <input
        type="text"
        placeholder="Зрада?"
        autoFocus={true}
        onBlur={this.finishEdit}
        onKeyPress={this.props.onEnter}/>
    )
  }
}

export default Input;
