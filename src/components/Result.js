import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ queen }) => {
  console.log(queen);
  return (
    <div>
      <img src={queen.image_url} alt={queen.name} />
      <p>{queen.name}</p>
    </div>
  );
};

Result.propTypes = {
  queen: PropTypes.any.isRequired
};

export default Result;
