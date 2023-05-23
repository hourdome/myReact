import React from 'react'

export default function ControlCard({ title }) {
  const alertStart = () => {
    window.alert('You are pressing ' + title)
  }
  return (
    <div>
      <h1>{title}</h1>
      <button className='btn btn-success' onClick={() => alertStart()}>
        Start
      </button>
      <button className='btn btn-warning'>Restart</button>
      <button className='btn btn-danger'>Quit</button>
    </div>
  )
}
