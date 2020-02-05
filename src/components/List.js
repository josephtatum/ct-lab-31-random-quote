import React from 'react';
import Options from './Options';
import PropTypes from 'prop-types';

const List = ({ queens, onChange }) => {
  return (
    <select onChange={({ target }) => onChange(target.value)}>
      <Options queens={queens}/>
    </select>
  );
};

List.propTypes = {
  queens: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default List;
