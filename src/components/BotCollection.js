// src/components/BotCollection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const response = await axios.get('../db.json');
      setBots(response.data);
    };

    fetchBots();
  }, []);

  return (
    <div>
      {bots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          {/* Add other bot details here */}
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
