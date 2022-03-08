import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

function CustomTextField({ label, name, ...otherProps }) {
  const [field, metadata] = useField(name)
  const props = {
    label,
    variant: 'outlined',
    required: true,
    // noublie jamais cette merde, grrr
    ...field,
    ...otherProps
  }

  if (metadata && metadata.error && metadata.touched) {
    props.error = true
    props.helperText = metadata.error
  }

  return <TextField {...props} />
}

export default CustomTextField
