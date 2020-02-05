import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ queens }) => {
  return (
    queens.map(queen => {
      return <option key={queen.id} value={queen.id}>
        {queen.name}
      </option>;
    })
  );
};

Options.propTypes = {
  queens: PropTypes.array.isRequired
};

export default Options;
