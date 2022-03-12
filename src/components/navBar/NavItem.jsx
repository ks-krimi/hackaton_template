import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Box,
  alpha
} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  root: {
    '&$selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main
      /*  '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.05)
      } */
    }
    /* '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.05)
    } */
  },
  selected: {},
  span: {
    width: 3,
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0
  }
}))

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
}

function NavItem({ item, active }) {
  const classes = useStyle()
  const { title, path, icon, activeIcon } = item
  const isActiveRoot = active(path)
  let navigate = useNavigate()

  return (
    <ListItem
      onClick={() => navigate(path)}
      button
      key={title}
      selected={isActiveRoot}
      classes={{
        root: classes.root,
        selected: classes.selected
      }}
    >
      <ListItemIcon>
        <Box component="span" className={isActiveRoot ? classes.span : ''} />
        {isActiveRoot ? activeIcon : icon}
      </ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItem>
  )
}

export default NavItem
