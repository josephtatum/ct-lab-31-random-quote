import React, { useState, useEffect } from 'react';
import '../styles.css';
import Result from '../components/Result';
import List from '../components/List';

import { useQueens } from '../hooks/useQueens';

const App = () => {
  const { queen, queensList, changeQueen } = useQueens();
  console.log(queen);
  return (
    <>
      <List queens={queensList} onChange={changeQueen} />
      <Result queen={queen} />
    </>
  );
};

export default App;

