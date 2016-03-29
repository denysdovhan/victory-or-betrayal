import React, { PropTypes } from 'react';
import 'styles/Result';
import data from '../data';

const Result = ({ status }) => (
  <h1 className={ status }>
    { status ? data.results[status] : data.placeholders.result }
  </h1>
);

Result.propsTypes = {
  status: PropTypes.string.isRequired
};

export default Result;
