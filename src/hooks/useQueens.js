import { useState, useEffect } from 'react';
import { getQueens } from '../services/getQueens';

export const useQueens = () => {

  const [queen, setQueen] = useState({});
  const [queensList, setQueenList] = useState([]);

  useEffect(() => {
    getQueens()
      .then(res => {
        setQueenList(res);
        setQueen(res[0]);
      });
  }, []);

  const changeQueen = id => {
    const updatedQueen = queensList.find(queen => queen.id === Number(id));
    setQueen(updatedQueen);
    console.log(updatedQueen);
  };

  return { queen, queensList, changeQueen };
};
