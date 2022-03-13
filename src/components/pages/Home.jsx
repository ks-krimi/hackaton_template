import React from 'react'
import { Typography } from '@material-ui/core'

function Home() {
  return (
    <div style={{ padding: '1em', display: 'flex', gap: '1em' }}>
      <Typography variant="h6" color="textSecondary">
        Hi, Welcome to the dashboard
      </Typography>
    </div>
  )
}

export default Home
