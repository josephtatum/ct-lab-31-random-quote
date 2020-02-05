import React from 'react';
import PropTypes from 'prop-types';

const Lipsyncs = ({ lipsyncs }) => {
  console.log(lipsyncs);
  return (
    <div>
    </div>
  );
};

Lipsyncs.propTypes = {
  queen: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Lipsyncs;
