import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((player, idx) => (
        <li key={idx}>
          Mr. {player.name} {player.score}
        </li>
      ))}
    </ul>
  );
};

export default ListofPlayers;
