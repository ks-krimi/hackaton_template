import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/dashboard">
      <Typography color="textSecondary" variant="h6">
        Logo
      </Typography>
    </Link>
  )
}

export default Logo
