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
  onClick: PropTypes.func.isRequired
};

export default Options;
