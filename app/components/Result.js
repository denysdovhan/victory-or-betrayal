import React from 'react';
import 'styles/Result';

const Result = ({ status }) => (
  <h1 className={ status }>
    { status === 'victory'  ? 'ПЕРЕМОГА!' :
      status === 'betrayal' ? 'ЗРАДА!'    : 'Просто запитай…' }
  </h1>
);

export default Result;
