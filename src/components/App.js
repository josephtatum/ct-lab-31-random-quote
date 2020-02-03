import React from 'react';
import Button from './Button';
import Result from './Result';

const getRandomQueen = () => {

  return fetch('http://www.nokeynoshade.party/api/queens/')
    .then(res => res.json())
    .then(res => res[Math.floor(Math.random() * res.length)])
    .then(res => console.log(res));
};

export default function App() {

  return (
    <>
      <Button onClick={getRandomQueen}/>
      <Result />
    </>
  );
}
