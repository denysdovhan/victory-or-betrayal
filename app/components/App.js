import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);

    this.state = {
      value: ''
    }
  }

  finishEdit(e) {
    console.log(`Entered text: ${e.target.value}`);

    this.setState({
      value: e.target.value
    });
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  isItVictory() {
    return Math.random() >= .5 ? "ПЕРЕМОГА!" : "ЗРАДА!"
  }

  render() {
    const value = this.state.value !== '' ? this.state.value : "щось";

    return (
      <div>
        <h1>Чи є "{value}" зрадою? — { this.isItVictory() }</h1>

        <input
          type="text"
          autoFocus={true}
          onBlur={this.finishEdit}
          onKeyPress={this.checkEnter}/>
      </div>
    );
  }
}
