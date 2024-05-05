import React from 'react'

function YourBotArmy({enlistedBots, releaseBot, dischargeBot }) {
  // if (!Array.isArray(enlistedBots) || enlistedBots.length === 0) {
  //   return <div className='bg-purple-500'>Your Bot Army is empty</div>;
  // }
  return (
    <div className='bg-purple-500 flex flex-wrap flex-row'>
      <h2 className='text-4xl'>Your Bot Army</h2>
      {enlistedBots.map((bot) => (
        <div key={bot.id} className='p-[10px]' onClick={() => releaseBot(bot)}>
          <img src={bot.avatar_url} alt="Bot" />
          <h2 className='font-bold'>Name: {bot.name}</h2>
          <p>Catchphrase: {bot.catchphrase}</p>
          <h3>Class: {bot.bot_class}</h3>
          <p className='font-medium'>
            Health: {bot.health} Damage: {bot.damage}
          </p>
          <button className='bg-red-600 w-24 rounded-md' onClick={() => dischargeBot(bot)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default YourBotArmy