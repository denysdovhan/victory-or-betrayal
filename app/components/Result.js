import React, { PropTypes } from 'react';
import 'styles/Result';

const Result = ({ status, results, placeholder }) => (
  <h1 className={ status }>
    { status ? results[status] : placeholder }
  </h1>
);

Result.propsTypes = {
  status: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

Result.defaultProps = {
  placeholder: 'Nothing'
};

export default Result;
