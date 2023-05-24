import React from 'react'
import { Button, Card, CardContent } from '@mui/joy'
import { Alert, ToggleSwitch } from 'flowbite-react'

export default function ControlCard({ title }) {
  const startProgram = () => {
    return (
      <Alert
        color='success'
        onDismiss={function onDismiss() {
          return alert('Alert dismissed')
        }}
      >
        <span>
          <span className='font-medium'>Info alert</span> Change a few things up
          and try submitting again.
        </span>
      </Alert>
    )
  }

  const restartProgram = () => {
    window.alert('Restart ' + title)
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
      <CardContent>
        <h4>{title}</h4>
        <div className='flex flex-wrap gap-2' id='toggle'>
          <Button pill={true} onClick={() => startProgram()}>
            Start
          </Button>
          <Button pill={true} color='warning' onClick={() => restartProgram()}>
            Restart
          </Button>
          <Button pill={true} color='danger'>
            Down
          </Button>
        </div>
        {showData()}
      </CardContent>
    </Card>
  )
}
