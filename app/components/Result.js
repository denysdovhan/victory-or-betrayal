import React from 'react';
import 'styles/Result';
import data from '../data';

const Result = ({ status }) => (
  <h1 className={ status }>
    { status ? data.results[status] : data.placeholders.result }
  </h1>
);

export default Result;
