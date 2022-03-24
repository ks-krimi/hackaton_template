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
  useSocket()
  return (
    <Page title="Dashboard">
      <Typography variant="h6" color="textSecondary">
        Hi, Welcome to the dashboard
      </Typography>
    </Page>
  )
}

export default Home
