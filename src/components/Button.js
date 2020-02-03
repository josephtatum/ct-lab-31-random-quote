import React from 'react';
import propTypes from 'prop-types';

const Button = ({ onClick }) => {
  return <button onClick={onClick}type='submit'>Get New Quote</button>;
};

Button.propTypes = {
  onClick: propTypes.func.isRequired
};

export default Button;
