import React from 'react'
import { Outlet } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const RootStyle = withStyles('main')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
})

const MainStyle = withStyles('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

function Layout() {
  return (
    <RootStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
      <CssBaseline />
    </RootStyle>
  )
}

export default Layout
