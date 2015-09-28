import React from 'react';

import Input from './Input';

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

  isItVictory() {
    return Math.random() >= .5 ? "ПЕРЕМОГА!" : "ЗРАДА!"
  }

  render() {
    const value = this.state.value !== '' ? this.state.value : "щось";

    return (
      <div>
        <h1>Чи є "{value}" зрадою? — { this.isItVictory() }</h1>

        <Input onEnter={this.finishEdit}/>
      </div>
    );
  }
}
