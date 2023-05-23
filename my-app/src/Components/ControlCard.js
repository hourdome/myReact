import React from 'react'
import { Button, Card, CardContent } from '@mui/joy'

export default function ControlCard({ title }) {
  const alertStart = () => {
    window.alert('You are pressing ' + title)
  }
  const showData = () => {
    return (
      <div>
        <li>Hello</li>
        <li>World</li>
      </div>
    )
  }
  return (
    <Card className='m-4 rounded-md border'>
      <h4>{title}</h4>
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
      {showData()}
    </Card>
  )
}
