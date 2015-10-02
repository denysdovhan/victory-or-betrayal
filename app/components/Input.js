import React from 'react';

class Input extends React.Component {

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.props.onEnter(e);
    }
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
