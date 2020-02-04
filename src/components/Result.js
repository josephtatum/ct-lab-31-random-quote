import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ queen }) => {
  return (
    <div>
      <img src={queen.image_url} alt={queen.name} />
      <h1>{queen.name}</h1>
      <p>{queen.quote}</p>
    </div>
  );
};

Result.propTypes = {
  queen: PropTypes.any.isRequired
};

export default Result;
