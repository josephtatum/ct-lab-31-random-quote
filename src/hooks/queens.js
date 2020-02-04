import { useState, useEffect } from 'react';
import { getQueens } from '../services/getQueens';

export const useQueens = () => {

  const [queen, setQueen] = useState({});
  const [queensList, setQueenList] = useState([]);


  useEffect(() => {
    return getQueens()
      .then(res => {
        setQueenList(res);
      });
  }, []);

  const selectedQueen = () => {
    
  };

  return { queen, queensList, selectedQueen };
};
