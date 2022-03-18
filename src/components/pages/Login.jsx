import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Container, makeStyles, Typography, Link } from '@material-ui/core'
import { SignIn } from '../formulaire'
import { useResponsive } from '../../hooks'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%'
  },
  form: {
    width: '100%',
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100%',
    padding: theme.spacing(12, 0)
  },
  image: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
  }
}))

function Login() {
  const classes = useStyle()
  const isTablette = useResponsive('up', 'md')

  return (
    <Container className={classes.root}>
      {isTablette && (
        <div className={classes.image}>
          <img
            src="/static/illustrations/illustration_login.png"
            alt="login illustration"
          />
        </div>
      )}
      <div className={classes.form}>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Sign in to app name
        </Typography>
        <Typography color="textSecondary" style={{ marginBottom: '2.5em' }}>
          Enter your details below.
        </Typography>
        <SignIn />
        <Typography variant="body2" align="center" style={{ margin: '1em 0' }}>
          Don’t have an account?&nbsp;
          <Link
            variant="subtitle2"
            to="/auth/register"
            underline="hover"
            component={RouterLink}
          >
            Get started
          </Link>
        </Typography>
      </div>
    </Container>
  )
}

export default Login
