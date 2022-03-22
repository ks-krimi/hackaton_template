import { alpha } from '@material-ui/core'

const GREY = {
  0: '#FFFFFF',
  100: '#FAFAFA',
  200: '#F2F5F9',
  300: '#CED3D6',
  400: '#BDC5CA',
  500: '#A1ACB3',
  600: '#88929F',
  700: '#444657',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#A1ACB3', 0.08),
  500_12: alpha('#A1ACB3', 0.12),
  500_16: alpha('#A1ACB3', 0.16),
  500_24: alpha('#A1ACB3', 0.24),
  500_32: alpha('#A1ACB3', 0.32),
  500_48: alpha('#A1ACB3', 0.48),
  500_56: alpha('#A1ACB3', 0.56),
  500_80: alpha('#A1ACB3', 0.8)
}

const PRIMARY = {
  light: '#475DDB',
  main: '#5E75FB',
  dark: '#4643D3',
  contrastText: '#FFFFFF'
}

const SECONDARY = {
  light: '#5E75FB',
  main: '#475DDB',
  dark: '#4643D3',
  contrastText: '#FFFFFF'
}

const SUCCESS = {
  light: '#EBF9F1',
  main: '#3DC171',
  dark: '#229A16',
  contrastText: GREY[800]
}

const WARNING = {
  light: '#FFF9DE',
  main: '#FFB800',
  dark: '#B78103',
  contrastText: GREY[800]
}

const ERROR = {
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  contrastText: '#FFFFFF'
}

const palette = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#FFFFFF', default: GREY[100] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
}

export default palette
