import React from 'react'
import { AppBar, Toolbar, IconButton, alpha, Box } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useResponsive } from '../../hooks'
import { Profile } from '../account'

const DRAWER_WIDTH = 280
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const RootStyle = withStyles(({ palette, breakpoints }) => ({
  root: {
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(palette.background.default, 0.72),
    [breakpoints.up('lg')]: {
      width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
    }
  }
}))(AppBar)

const ToolbarStyle = withStyles(({ breakpoints, spacing }) => ({
  root: {
    minHeight: APPBAR_MOBILE,
    [breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: spacing(0, 5)
    }
  }
}))(Toolbar)
CustomAppBar.prototype = {
  onOpenDrawer: PropTypes.func
}

function CustomAppBar({ onOpenDrawer }) {
  const isDesktop = useResponsive('up', 'lg')

  return (
    <RootStyle>
      <ToolbarStyle>
        {!isDesktop && (
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={() => onOpenDrawer()}
          >
            <Menu />
          </IconButton>
        )}
        {/* box separator */}
        <Box style={{ flex: '1' }} />
        {/* TODO: account */}
        <Profile />
      </ToolbarStyle>
    </RootStyle>
  )
}

export default CustomAppBar
