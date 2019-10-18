import React from 'react'
import NameCase from 'namecase'
// import moment from 'moment'
import spdf from 'simple-react-pdf'
import moment from 'moment-timezone'
import styled from '@emotion/styled'
import { Panel } from 'primereact/panel'

const LeftAligned = styled.div`
  text-align: left;
`

const Show = ({ applicant }) => {
  const fullName = NameCase(`${applicant.firstName} ${applicant.lastName}`)
  return (
    <div className="container">
      <h1>Applicant Portal</h1>
      <hr />
      <LeftAligned>
        <div className="row">
          <div className="col-md-4">
            <Panel header="Applicant" toggleable={true}>
              <dt>Name</dt>
              <dd>{fullName}</dd>

              <dt>Date</dt>
              <dd>
                {moment(applicant.entryDate)
                  .tz('America/Detroit')
                  .format('lll')}
              </dd>

              <dt>ID</dt>
              <dd>{applicant.locatorID}</dd>
            </Panel>
            <Panel header="Contact Info" toggleable={true}>
              <dt>Email Address</dt>
              <dd>{applicant.email}</dd>
              <dt>Street Address</dt>
              <dd>
                {applicant.street_address} <br />
                {applicant.city}, {applicant.state} {applicant.zip}
              </dd>
              <dt>Phone</dt>
              <dd>{applicant.phone}</dd>
            </Panel>
          </div>
          <div className="col-md-8">
            <Panel header={fullName}>
              {applicant.resume_uploaded && <div className="alert alert-success">We have received your resume.</div>}
              {!applicant.resume_uploaded && (
                <div className="alert alert-warning">We have not received your resume.</div>
              )}
              <div className="message">
                <p>
                  <strong>Hello {fullName}</strong>,
                </p>
                <p>Our hiring team is currently reviewing all applications.</p>
                <p>
                  If you are among qualified candidates, you will receive a call from one of our recruiters to schedule
                  a phone interview. In any case, we will keep you posted on the status of your application.
                </p>
                <p>
                  <u>
                    We are still in the process of construction and will not be able to provide additional updates until
                    the first quarter of 2020.
                  </u>
                </p>
                <p>Please continue to check this portal for additional updates.</p>
                <p>
                  Cheers! <br />
                  The Pincanna Team
                </p>
              </div>
            </Panel>
          </div>
        </div>
      </LeftAligned>
    </div>
  )
}

export default Show
