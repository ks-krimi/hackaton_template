import PropTypes from 'prop-types'
import { alpha, makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import SimpleBarReact from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const useStyle = makeStyles((theme) => ({
  rootStyle: {
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden'
  },
  simpleBarReact: {
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
      '&:before': {
        backgroundColor: alpha(theme.palette.primary.main, 0.48)
      },
      '&.simplebar-visible:before': {
        opacity: 1
      }
    },
    '& .simplebar-track.simplebar-vertical': {
      width: 10
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
      height: 6
    },
    '& .simplebar-mask': {
      zIndex: 'inherit'
    }
  }
}))

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
}

export default function Scrollbar({ children, sx, ...other }) {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

  const classes = useStyle()

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }
  return (
    <div className={classes.rootStyle}>
      <SimpleBarReact className={classes.simpleBarReact}>
        {children}
      </SimpleBarReact>
    </div>
  )
}
