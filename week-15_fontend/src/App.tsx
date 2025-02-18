import React from 'react'
import { Button } from './components/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'
import { Card } from './components/Card'

const App = () => {
  return (
    <div>
      <Button variant='primary' text='Add content' startIcon={<PlusIcon/>}></Button>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />}></Button>
      <Card></Card>
    </div>
  )
}

export default App
