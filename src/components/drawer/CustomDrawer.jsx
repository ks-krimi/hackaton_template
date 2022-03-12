import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Drawer, SwipeableDrawer, makeStyles, Box } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import { ScrollBar } from '../scrollBar'
import { useResponsive } from '../../hooks'
import { List } from '../navBar'
import Logo from '../logo'

const DRAWER_WIDTH = 280

const useStyle = makeStyles((theme) => ({
  drawerPaper: {
    width: DRAWER_WIDTH
  },
  rootStyle: {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: DRAWER_WIDTH
    }
  }
}))

CustomDrawer.propTypes = {
  isOpenDrawer: PropTypes.bool,
  setIsOpenDrawer: PropTypes.func
}

function CustomDrawer({ isOpenDrawer, setIsOpenDrawer }) {
  const isDesktop = useResponsive('up', 'lg')
  const classes = useStyle()
  const { pathname } = useLocation()

  const onCloseDrawer = () => {
    setIsOpenDrawer(false)
  }
  const onOpenDrawer = () => {
    setIsOpenDrawer(true)
  }

  useEffect(() => {
    if (isOpenDrawer) {
      onCloseDrawer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className={classes.rootStyle}>
      {!isDesktop && (
        <SwipeableDrawer
          open={isOpenDrawer}
          onClose={onCloseDrawer}
          onOpen={onOpenDrawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <ScrollBar>
            <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
              <Logo />
            </Box>
            <List />
          </ScrollBar>
        </SwipeableDrawer>
      )}
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          classes={{ paper: classes.drawerPaper }}
        >
          <ScrollBar>
            <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
              <Logo />
            </Box>
            <List />
          </ScrollBar>
        </Drawer>
      )}
    </div>
  )
}

export default CustomDrawer
