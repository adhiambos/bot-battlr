import React from 'react'

function BotCollection({ bots, enlistBot, enlistedBot, showBotSpecs }) {
  const handleEnlist = (bot) => {
    enlistBot(bot)
  }
  return (
    <div className='flex flex-wrap flex-row bg-slate-900 text-white' >
      {Object.values(bots).map((bot) => (
        <div key={bot.key} className='p-[10px]' onClick={() => showBotSpecs(bot)}>
          <img src={bot.avatar_url} alt="bot" />
          <h2 className='font-bold text-lg'>Name: {bot.name}</h2>
          <p>Catchphrase: {bot.catchphrase}</p>
          <h3>Class: {bot.bot_class}</h3>
          <p className='font-medium'>
            Health: {bot.health} Damage: {bot.damage} Armour: {bot.armour}
          </p>
        </div>
      ))}
    </div>

  )
}

export default BotCollection