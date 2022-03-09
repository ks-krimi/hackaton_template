import React from 'react'
import * as Yup from 'yup'
import { Stepper, Step, TextField } from '../controlles'

/* Yup schemas */
const V_SCHEMA_1 = Yup.object().shape({
  name: Yup.string().min(2, 'Trop court').required('Veuiller saisir votre nom')
})
const V_SCHEMA_2 = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Veuiller saisir votre email')
})
const V_SCHEMA_3 = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Trop court')
    .required('Veuiller saisir votre mot de passe')
})

function SignUp() {
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time))
  const handleSubmit = async (value, helpers) => {
    await sleep(5000)
    console.log(value)
  }
  return (
    <Stepper
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Step label="Step 1" validationSchema={V_SCHEMA_1}>
        <TextField label="Name" name="name" />
      </Step>
      <Step label="Step 2" validationSchema={V_SCHEMA_2}>
        <TextField label="Email" name="email" />
      </Step>
      <Step label="Step 3" validationSchema={V_SCHEMA_3}>
        <TextField label="Password" name="password" type="password" />
      </Step>
    </Stepper>
  )
}

export default SignUp
