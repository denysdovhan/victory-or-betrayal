import React from 'react';

const Result = ({ value }) => (
  <h1 className={ value ? "victory" : "betrayal" }>
    { value ? "ПЕРЕМОГА!" : "ЗРАДА!" }
  </h1>
);

export default Result;
