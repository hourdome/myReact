import React from 'react'

export default function Topbar({ subtitle }) {
  return (
    <div>
      <nav>
        <h1> {subtitle} </h1>
      </nav>
      <div>This is My Header</div>
      <div>Do you like my header</div>
    </div>
  )
}
