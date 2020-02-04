import React, { useState, useEffect } from 'react';
import '../styles.css';
import Button from '../components/Button';
import Result from '../components/Result';
import List from '../components/List';

import { useQueens } from '../hooks/queens';


const App = () => {
  const { queen, queensList, selectedQueen } = useQueens;

  return (
    <>
      <List queens={queensList} onSelect={selectedQueen} />
      <Result queen={queen} />
    </>
  );
};

export default App;

