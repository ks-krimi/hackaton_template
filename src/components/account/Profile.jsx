import React, { useState } from 'react'
import {
  ButtonBase,
  Avatar,
  withStyles,
  alpha,
  Menu,
  MenuList,
  MenuItem
} from '@material-ui/core'

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <ButtonBase focusRipple onClick={handleClick}>
        <CustomeAvatar>N</CustomeAvatar>
      </ButtonBase>
      <CustomeMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </CustomeMenu>
    </>
  )
}

const CustomeAvatar = withStyles((theme) => ({
  root: {
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: `2.4px solid ${alpha(theme.palette.primary.light, 0.5)}`,
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.7)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  }
}))(Avatar)

const CustomeMenu = withStyles((theme) => ({
  paper: {
    border: `1px solid ${alpha(
      theme.palette.getContrastText(theme.palette.background.default),
      0.1
    )}`
  }
}))((props) => <Menu elevation={0} {...props} />)
