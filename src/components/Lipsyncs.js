import React from 'react';
import PropTypes from 'prop-types';

const Lipsyncs = ({ lipsyncs, queen }) => {
  return (
    lipsyncs.map((lipsync, i) => {

      const competition = lipsync.queens.find(versus => {
        if(versus.id !== queen.id) {
          return versus;
        }
      });

      return (
        <>
          <p>{i + 1}</p>
          <p key={lipsync.id}>{lipsync.name} - {lipsync.artist}</p>
          <p>versus: {competition.name}</p>
        </>
      );
    })
  );
};

Lipsyncs.propTypes = {
  queen: PropTypes.any.isRequired,
  lipsyncs: PropTypes.array.isRequired
};

export default Lipsyncs;
