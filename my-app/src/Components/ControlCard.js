import React from 'react'

export default function ControlCard({ title }) {
  const alertStart = () => {
    window.alert('You are pressing ' + title)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button
        className='text-base p-2 font-bold bg-green-500 rounded-sm'
        onClick={() => alertStart()}
      >
        Start
      </button>
      <button className='text-base p-2 font-bold bg-yellow-500 rounded-sm'>
        Restart
      </button>
      <button className='text-base p-2 font-bold bg-orange-500 rounded-sm'>
        Quit
      </button>
    </div>
  )
}
