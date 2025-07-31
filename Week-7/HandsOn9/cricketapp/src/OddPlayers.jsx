import React from 'react';

const OddPlayers = (players) => {
  const odd = players.filter((_, i) => i % 2 === 0);

  return (
    <ul>
      {odd.map((p, i) => (
        <li key={i}>{ordinal(i)} : {p}</li>
      ))}
    </ul>
  );
};

const ordinal = (i) => {
  return ['First', 'Third', 'Fifth'][i] || `${i + 1}th`;
};

export default OddPlayers;
