import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Result from '../components/Result';
import List from '../components/List';
import { getQueens } from '../services/getQueens';


const QueenApp = () => {

  const [queen, setQueen] = useState({});
  const [queensList, setQueenList] = useState([]);
  

  useEffect(() => {
    return getQueens()
      .then(res => {
        setQueenList(res);
      });
  }, []);

  const handleClick = () => {
    return getQueens()
      .then(res => res[Math.floor(Math.random() * res.length)])
      .then(res => {
        setQueen(res);
      });
  };

  return (
    <>
      <List queens={queensList}/>
      <Button onClick={handleClick} />
      <Result queen={queen} />
    </>
  );
};

export default QueenApp;

// export default class GetQueen extends Component {

//   state = {
//     queen: {}
//   }

  // getQueen = () => {
  //   return getRandomQueen().then(res => this.setState(() => ({ queen: res })));
  // };

//   componentDidMount() {
//     this.getQueen();
//   }

//   render() {
//     return (
//       <>
//         <Button onClick={this.getQueen} />
//         <Result queen={this.state.queen} />
//       </>
//     );
//   }
// }
