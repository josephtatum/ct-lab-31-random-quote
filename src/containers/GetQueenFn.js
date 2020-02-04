import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Result from '../components/Result';
import { getRandomQueen } from '../services/getQueens';


const GetQueenFn = () => {

  const [queen, setQueen] = useState({});

  useEffect(() => {
    return getRandomQueen()
      .then(res => {
        setQueen(res);
      });
  }, []);

  const handleClick = () => {
    return getRandomQueen()
      .then(res => {
        setQueen(res);
      });
  };

  return (
    <>
      <Button onClick={handleClick} />
      <Result queen={queen} />
    </>
  );
};

export default GetQueenFn;

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
