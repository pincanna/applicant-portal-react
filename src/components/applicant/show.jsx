import styled from '@emotion/styled'
import moment from 'moment-timezone'
import NameCase from 'namecase'
import { Panel } from 'primereact/panel'
import React from 'react'

import NewComment from './new_comment'
import UploadResume from './upload'

// import moment from 'moment'
const LeftAligned = styled.div`
  text-align: left;
`
const Show = ({ applicant }) => {
  const fullName = NameCase(`${applicant.firstName} ${applicant.lastName}`)
  return (
    <div className="container">
      <h1>Applicant Portal</h1>
      <hr />
      <p>
        Please <a href={`http://portal.pincanna.com/employment/a/${applicant.locatorID}`}>CLICK HERE</a> to continue.
      </p>
    </div>
  )
}
export default Show
