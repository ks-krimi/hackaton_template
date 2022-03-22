import { useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  createTheme,
  CssBaseline,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core'
import palette from './palette'
import typography from './typography'
import breakpoints from './breackpoints'
import { Input } from './overrides'

const ThemeConfig = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette: { palette, type: 'light' },
      shape: { borderRadius: 6 },
      typography,
      breakpoints
    }),
    []
  )

  const theme = createTheme(themeOptions)
  theme.props = { MuiButton: { disableElevation: true } }
  theme.overrides = { ...Input(theme) }

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  )
}

ThemeConfig.propTypes = {
  children: PropTypes.node
}

export default ThemeConfig
