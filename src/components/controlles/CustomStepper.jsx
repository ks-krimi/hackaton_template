import React, { Children, useState } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { Button } from '.'

export function CustomStepper({ children, ...otherProps }) {
  /* active step state */
  const [step, setStep] = useState(0)
  const [stepCompleted, setStepCompleted] = useState(false)

  /* Set Stepper children to array */
  const childrenArray = Children.toArray(children)

  /* Select a current child from childrenArray */
  const currentChild = childrenArray[step]

  const isLastStep = () => childrenArray.length - 1 === step

  const handlePrevious = () => {
    setStep((current) => current - 1)
  }

  return (
    <Formik
      {...otherProps}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await otherProps.onSubmit(values, helpers)
          setStepCompleted(true)
        } else setStep((s) => s + 1)
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {/* Stepper component */}
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={stepCompleted || step > index}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}

          {step > 0 && !isSubmitting && (
            <Button onClick={handlePrevious}>Retour</Button>
          )}

          <Button>
            {isSubmitting
              ? 'Submitting'
              : isLastStep()
              ? "S'inscrire"
              : 'Suivant'}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export const CustomStep = ({ children, label = '', validationSchema = {} }) => {
  return <>{children}</>
}
