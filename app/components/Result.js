import React from 'react';

const Result = ({ status }) => (
  <h1 className={ status }>
    { status === 'victory'  ? 'ПЕРЕМОГА!' :
      status === 'betrayal' ? 'ЗРАДА!'    : 'Просто запитай…' }
  </h1>
);

export default Result;
