import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline, makeStyles } from '@material-ui/core'
import { AppBar } from '../appBar'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const useStyle = makeStyles((theme) => ({
  rootStyle: {
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
  },
  mainStyle: {
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
  }
}))

function AuthLayout() {
  const classes = useStyle()
  return (
    <div className={classes.rootStyle}>
      <AppBar />
      <main className={classes.mainStyle}>
        <Outlet />
      </main>
      <CssBaseline />
    </div>
  )
}

export default AuthLayout
