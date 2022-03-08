import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { useFormikContext } from 'formik'

function CustomButton({ children, ...otherProps }) {
  const { isSubmitting, isValid, submitForm } = useFormikContext()
  const handleSubmit = () => {
    submitForm()
  }
  const props = {
    onClick: handleSubmit,
    variant: 'contained',
    color: 'primary',
    ...otherProps
  }
  return (
    <Button
      {...props}
      startIcon={isSubmitting && <CircularProgress size="1rem" />}
      disabled={!isValid || isSubmitting}
    >
      {children}
    </Button>
  )
}

export default CustomButton
