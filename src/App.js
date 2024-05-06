import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';

function App() {
  const [botArray, setBotArray] = useState ([])
  const [enlistedBots, setEnlistedBots] = useState([])
  const [selectedBot, setSelectedBot] = useState(null)
  
  useEffect (() => {
      fetch ('https://bot-api-5aah.onrender.com/bots')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error fetching data');
        }
        return resp.json()})
      .then((data) => {
          //console.log('Received data:', data);
          if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
            throw new Error('Wrong format');
          }
          setBotArray(data)})
      .catch((error) => console.error('Error fetching data', error))
      
  }, [])

  const enlistBot = (bot) => {
    if(!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot])
    }
  }

  const releaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };

  const dischargeBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);

    fetch(`https://bot-api-5aah.onrender.com/bots/${bot.id}`, {
      method: "DELETE",
      header: {
        "Content-Type" : "application/json"
      },
    })
    .then((resp) => {
      if(!resp.ok) {
        throw new Error("Failed to delete from backend")
      }
      const updatedEnlistedBots = enlistedBots.filter((enlistBot) => enlistBot.id !== bot.id)
      setEnlistedBots(updatedEnlistedBots)
      alert("deleted")
    })
    // .then((data) => {
    //   setEnlistedBots(data)
    //   alert("Deleted from database")
    // })
    .catch((error) => console.error("Error deleting from backend", error))
  }

  const showBotSpecs = (bot) => {
    setSelectedBot(bot)
  }

  const goBack = () => {
    setSelectedBot(null)
  }

  return (
    <div className="App">
      {selectedBot ? (
        <BotSpecs botselected={selectedBot} enlistBot={enlistBot} goBack={goBack} />
      ) : (
        <>
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot}/>
      <BotCollection bots={botArray} enlistBot={enlistBot} enlistedBots={enlistedBots} showBotSpecs={showBotSpecs}/>
        </>
      )}

    </div>
  );
}

export default App;