import React from 'react'
import { Box, List, Typography } from '@material-ui/core'
import navbarConfig from './navConfig'
import { ListItem } from '.'
import { matchPath, useLocation } from 'react-router-dom'

function NavBar() {
  const { pathname } = useLocation()
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false

  return (
    <Box sx={{ px: 2.5, py: 3 }}>
      <Typography variant="overline" color="textSecondary">
        Menu
      </Typography>
      <List component="nav" aria-label="main nav bar list">
        {navbarConfig.map((item) => {
          return <ListItem key={item.title} item={item} active={match} />
        })}
      </List>
    </Box>
  )
}

export default NavBar
