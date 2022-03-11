import React from 'react'
import { CssBaseline } from '@material-ui/core'

function Layout({ children }) {
  return (
    <main>
      {children}
      <CssBaseline />
    </main>
  )
}

export default Layout
