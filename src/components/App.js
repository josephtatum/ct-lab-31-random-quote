import React, { Component, useState } from 'react';
import GetQueen from '../containers/GetQueen';
import { getRandomQueen } from '../services/getQueens';

export default class App extends Component {

  state = {
    queen: {}
  }

  getQueen = () => {
    return getRandomQueen().then(res => this.setState(() => ({ queen: res })));
  };

  componentDidMount() {
    this.getQueen();
  }

  render() {
    return (
      <>
        <GetQueen getQueen={this.getQueen} queen={this.state.queen}/>
      </>
    );
  }
}

// export default function App() {

//   return (
//     <>
//       <Button onClick={getRandomQueen} />
//       <Result />
//     </>
//   );
// }
