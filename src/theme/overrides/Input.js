export default function Input(theme) {
  return {
    MuiOutlinedInput: {
      root: {
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: theme.palette.primary.main
        }
      }
    }
  }
}
