import React from 'react';

const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((player, idx) => (
        <li key={idx}>Mr. {player}</li>
      ))}
    </ul>
  );
};

export default ListofIndianPlayers;
