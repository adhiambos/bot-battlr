import React from 'react'

function BotSpecs({ botselected, goBack, enlistBot}) {
  const {id, avatar_url, name, catchphrase, bot_class, health, damage, armour, created_at, updated_at} = botselected;
  const handleEnlist = () => {
    enlistBot(botselected);
    goBack();
  }
  return (
    <div className='ml-[40%]'>
      <img src={avatar_url} alt={`Bot`} />
      <h2 className='font-bold text-lg'>Name: {name}</h2>
      <p>Catchphrase: {catchphrase}</p>
      <h3 className='font-medium'>Class: {bot_class}</h3>
      <p className='font-medium'>Health: {health} Damage: {damage} Armour: {armour}</p>
      <p>Created at: {created_at}</p>
      <p className='pb-4'>Updated at: {updated_at}</p>
      <button className="bg-black text-white w-24 rounded-md" onClick={goBack}>Go back</button>
      <button className="bg-black text-white w-24 rounded-md ml-4" onClick={handleEnlist}>Enlist</button>
    </div>
  )
}

export default BotSpecs