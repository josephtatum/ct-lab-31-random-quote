import React, { Component, useState } from 'react';
import Button from './Button';
import Result from './Result';

export default class App extends Component {

  state = {
    queen: {}
  }

  getRandomQueen = () => {

    return fetch('http://www.nokeynoshade.party/api/queens/')
      .then(res => res.json())
      .then(res => res[Math.floor(Math.random() * res.length)])
      .then(res => this.setState(() => ({ queen: res })));
  };

  componentDidMount() {
    this.getRandomQueen();
  }


  render() {
    return (
      <>
        <Button onClick={this.getRandomQueen} />
        <Result queen={ this.state.queen }/>
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
