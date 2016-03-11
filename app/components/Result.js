import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <h1 className={this.props.value ? "victory" : "betrayal"}>
        {this.props.value ? "ПЕРЕМОГА!" : "ЗРАДА!"}
      </h1>
    );
  }
}

export default Result;
