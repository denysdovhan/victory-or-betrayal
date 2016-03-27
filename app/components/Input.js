import React from 'react';
import styles from 'styles/Input';

class Input extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  render() {
    const { value } = this.state;

    return (
      <input
        type='text'
        className={styles.input}
        placeholder='Введіть запит…'
        value={ value }
        autoFocus={ true }
        onChange={ e => {
          this.setState({
            value: e.target.value
          });
        }}
        onBlur={ () => { this.props.requersHandler(value); }}
        onKeyPress={ e => {
          if (e.key === 'Enter') {
            this.props.requersHandler(value);
          }
        }}/>
    );
  }
}

export default Input;
