import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Input,
  InputAdornment,
  makeStyles,
  Paper,
  alpha
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

const useStyle = makeStyles(({ palette }) => ({
  overlay: {
    position: 'absolute',
    inset: 0,
    backdropFilter: 'blur(1px)',
    WebkitBackdropFilter: 'blur(1px)',
    backgroundColor: alpha(
      palette.getContrastText(palette.background.default),
      0.05
    ),
    zIndex: 10000,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start'
  }
}))

export default function CustomSearchBar() {
  const [text, settext] = useState('')
  const [focused, setfocused] = useState(false)
  const classes = useStyle()

  const Overlay = ({ focused, children }) => {
    if (!focused) return null
    return ReactDOM.createPortal(
      <div className={classes.overlay}>{children}</div>,
      document.body
    )
  }

  return (
    <>
      {!focused && (
        <CustumeInput
          text={text}
          settext={settext}
          setfocused={setfocused}
          classes={classes}
        />
      )}
      {focused && (
        <Overlay focused={focused}>
          <Paper
            elevation={false}
            style={{
              padding: '0.4em',
              width: 468,
              margin: '1em'
            }}
          >
            <CustumeInput
              text={text}
              settext={settext}
              setfocused={setfocused}
              onBlur={() => setfocused(false)}
              fullWidth
              autoFocus
            />
          </Paper>
        </Overlay>
      )}
    </>
  )
}

function CustumeInput({ text, settext, setfocused, ...props }) {
  return (
    <Input
      startAdornment={
        <InputAdornment position="start">
          <Search color="disabled" />
        </InputAdornment>
      }
      disableUnderline
      name="q"
      type="text"
      placeholder="Search ..."
      value={text}
      onChange={(e) => settext(e.target.value)}
      onFocus={() => setfocused(true)}
      {...props}
    />
  )
}
