import React from 'react'
import { styled } from '@material-ui/core'
import { Page as WithHelmet } from '../page'
import { LiveProvider } from '../../context'
import { Video } from '../live'

const Page = styled(WithHelmet)((theme) => ({
  padding: '1em',
  display: 'flex',
  gap: '1em'
}))

function Home() {
  return (
    <LiveProvider>
      <Page
        title="Dashboard"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Video />
      </Page>
    </LiveProvider>
  )
}

export default Home
