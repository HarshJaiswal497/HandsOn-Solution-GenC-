import React from 'react';

const EvenPlayers = (players) => {
  const even = players.filter((_, i) => i % 2 !== 0);

  return (
    <ul>
      {even.map((p, i) => (
        <li key={i}>{ordinal(i)} : {p}</li>
      ))}
    </ul>
  );
};

const ordinal = (i) => {
  return ['Second', 'Fourth', 'Sixth'][i] || `${i + 2}th`;
};

export default EvenPlayers;
