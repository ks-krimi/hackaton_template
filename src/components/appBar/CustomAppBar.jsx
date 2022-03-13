import React from 'react'
import { AppBar, Toolbar, IconButton, alpha, Box } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { SearchBar } from '../searchBar'
import { useResponsive } from '../../hooks'
import { Profile } from '../account'
import Logo from '../logo'

const DRAWER_WIDTH = 280
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const RootStyle = withStyles(({ palette, breakpoints }) => ({
  root: ({ isLoggedIn }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)', // Fix on Mobile
    backgroundColor: alpha(palette.background.default, 0.72),
    [breakpoints.up('lg')]: {
      /* isLogin boolean: true si on est authentifiers sinon false */
      width: isLoggedIn ? `calc(100% - ${DRAWER_WIDTH + 1}px)` : '100%'
    }
  })
}))((props) => <AppBar {...props} />)

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

function CustomAppBar({ onOpenDrawer, isLoggedIn = false }) {
  const isDesktop = useResponsive('up', 'lg')

  return (
    <RootStyle isLoggedIn={isLoggedIn}>
      <ToolbarStyle>
        {isLoggedIn ? (
          <>
            {!isDesktop && (
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={() => onOpenDrawer()}
              >
                <Menu />
              </IconButton>
            )}
            <SearchBar />
            {/* box separator */}
            <Box style={{ flex: '1' }} />
            <Profile />
          </>
        ) : (
          <>
            <Logo />
            <Box style={{ flex: '1' }} />
          </>
        )}
        {/* TODO: SearchBar */}
      </ToolbarStyle>
    </RootStyle>
  )
}

export default CustomAppBar
