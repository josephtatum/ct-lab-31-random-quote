import React from 'react';
import Options from './Options';
import PropTypes from 'prop-types';

const List = ({ queens }) => {
  return (
    <select>
      <Options queens={queens}/>
    </select>
  );
};

List.propTypes = {
};

export default List;
