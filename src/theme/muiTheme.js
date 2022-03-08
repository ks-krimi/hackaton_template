import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5f76fb',
      light: ''
    },
    secondary: {
      main: '',
      light: ''
    },
    warning: {
      main: '',
      light: ''
    },
    error: {
      main: '',
      light: ''
    }
  },
  typography: {
    fontFamily: 'poppinsRegular',
    button: {
      textTransform: 'capitalize'
    }
  }
})
