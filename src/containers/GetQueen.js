import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Result from '../components/Result';

const GetQueen = ({ getQueen, queen }) => {
  return (
    <>
      <Button onClick={getQueen} />
      <Result queen={queen} />
    </>
  );
};

GetQueen.propTypes = {
  getQueen: PropTypes.func.isRequired,
  queen: PropTypes.object.isRequired
};

export default GetQueen;
