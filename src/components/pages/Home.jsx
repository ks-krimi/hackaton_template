import React from 'react'
import { SignIn, SignUp } from '../formulaire'

function Home() {
  return (
    <div style={{ padding: '1em', display: 'flex', gap: '1em' }}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Home
