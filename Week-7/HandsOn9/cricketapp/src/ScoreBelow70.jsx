import React from 'react';

const ScoreBelow70 = ({ players }) => {
  const filtered = players.filter(p => p.score < 70);

  return (
    <ul>
      {filtered.map((player, idx) => (
        <li key={idx}>
          Mr. {player.name} {player.score}
        </li>
      ))}
    </ul>
  );
};

export default ScoreBelow70;
