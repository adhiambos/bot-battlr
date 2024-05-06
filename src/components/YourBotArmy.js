// src/components/YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ bots }) => {
  return (
    <div>
      {bots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          {/* Display bot details */}
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
