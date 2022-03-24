import React from 'react'
import { Typography, styled } from '@material-ui/core'
import { Page as WithHelmet } from '../page'
import { useSocket } from '../../hooks'

const Page = styled(WithHelmet)((theme) => ({
  padding: '1em',
  display: 'flex',
  gap: '1em'
}))

function Home() {
  const { id, notification } = useSocket()

  return (
    <Page
      title="Dashboard"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="body1" color="textSecondary">
        Hello, this is your socket ID: {id}
      </Typography>
      {notification && (
        <Typography variant="caption" color="textSecondary">
          Notification: {notification}
        </Typography>
      )}
    </Page>
  )
}

export default Home
