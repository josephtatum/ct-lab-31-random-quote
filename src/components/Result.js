import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ queen, onClick }) => {
  return (
    <div>
      <img src={queen.image_url} alt={queen.name} />
      <h1>{queen.name}</h1>
      <p>{queen.quote}</p>
      <button onClick={onClick}>See Lipsyncs</button>
    </div>
  );
};

Result.propTypes = {
  queen: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Result;
