import { useState, useEffect } from 'react';
import { getQueens } from '../services/getQueens';
import { getLipsyncs } from '../services/getLipsyncs';

export const useQueens = () => {

  const [queen, setQueen] = useState({});
  const [queensList, setQueenList] = useState([]);
  const [lipsyncList, setLipsyncList] = useState([]);

  useEffect(() => {
    getQueens()
      .then(res => {
        setQueenList(res);
        setQueen(res[0]);
      });
  }, []);

  const changeQueen = id => {
    setLipsyncList([]);
    const updatedQueen = queensList.find(queen => queen.id === Number(id));
    setQueen(updatedQueen);
  };

  const findQueensLipsyncs = function() {
    return getLipsyncs(queen)
      .then(res => setLipsyncList(res));
  };

  return { queen, queensList, changeQueen, findQueensLipsyncs, lipsyncList };
};
