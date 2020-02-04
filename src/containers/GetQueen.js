import React, { Component, useState } from 'react';
import Button from '../components/Button';
import Result from '../components/Result';
import { getRandomQueen } from '../services/getQueens';

export default class GetQueen extends Component {

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
        <Button onClick={this.getQueen} />
        <Result queen={this.state.queen} />
      </>
    );
  }
}
