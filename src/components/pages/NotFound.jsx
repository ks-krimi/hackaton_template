import React from 'react'
import {
  Box,
  Container,
  makeStyles,
  styled,
  Typography
} from '@material-ui/core'
import { Page as WithHelmet } from '../page'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 512
  },
  text: {
    marginBottom: '0.5em',
    textAlign: 'center'
  },
  image: {
    maxWidth: 350,
    height: 'auto'
  }
}))

const Page = styled(WithHelmet)(() => {})

function NotFound() {
  const classes = useStyle()

  return (
    <Container component={Page} title="Page not found" className={classes.root}>
      <Box className={classes.box}>
        <img
          src="/static/illustrations/illustration_page_not_found.png"
          alt="illustration page not found"
          className={classes.image}
        />
        <Typography color="textSecondary" className={classes.text}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
      </Box>
    </Container>
  )
}

export default NotFound
