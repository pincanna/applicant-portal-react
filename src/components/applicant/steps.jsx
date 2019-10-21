import React from 'react'
import { Steps } from 'primereact/steps'

const AppSteps = (props) => {
  const items = [{ label: 'Application Received' }, { label: 'Resume Uploaded' }, { label: 'Wait for Decision' }]
  const { applicant } = props
  let index = 0

  switch (applicant.resume_uploaded) {
    case true:
      index = 2
      break
    case false:
      index = 0
      break
    default:
      index = 0
  }

  return <Steps model={items} activeIndex={index} />
}

export default AppSteps
