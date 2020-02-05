import React from 'react';
import '../styles.css';
import Result from '../components/Result';
import List from '../components/List';
import Lipsyncs from '../components/Lipsyncs';

import { useQueens } from '../hooks/useQueens';

const App = () => {
  const { queen, queensList, changeQueen, findQueensLipsyncs, lipsyncList } = useQueens();
  return (
    <>
      <List queens={queensList} onChange={changeQueen} />
      <Result queen={queen} onClick={findQueensLipsyncs} />
      <Lipsyncs lipsyncs={lipsyncList} queen={queen}/>
    </>
  );
};

export default App;

