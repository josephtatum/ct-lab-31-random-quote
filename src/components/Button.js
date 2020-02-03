import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Get New Queen</button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
