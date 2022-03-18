import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '../controlles'
import { Checkbox, FormControlLabel } from '@material-ui/core'

// formik validation
const INITIAL_FORM_STATE = { email: '', password: '' }
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email('Email invalide')
    .required('Veuiller saisir votre email'),
  password: Yup.string()
    .min(4, 'Trop court')
    .required('Veuiller saisir votre mot de passe')
})

function SignIn() {
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time))

  const handleSubmit = async (values) => {
    await sleep(5000)
    const { email, password } = values
    console.log({ email, password })
  }

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
    >
      <Form
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
      >
        <TextField label="email" name="email" />
        <TextField label="password" name="password" type="password" />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button type="submit">Connexion</Button>
      </Form>
    </Formik>
  )
}

export default SignIn
