import React from 'react'
import NameCase from 'namecase'
// import moment from 'moment'
import moment from 'moment-timezone'
import styled from '@emotion/styled'
import { Panel } from 'primereact/panel'
import UploadResume from './upload'
import AppSteps from './steps'
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
            {!applicant.resume_uploaded && (
              <Panel header="Upload Resume">
                <UploadResume id={applicant.locatorID} />
              </Panel>
            )}
          </div>
          <div className="col-md-8">
            <AppSteps applicant={applicant} />
            <Panel header="Application Status" toggleable={true}>
              {applicant.resume_uploaded && <div className="alert alert-success">We have received your resume.</div>}
              {!applicant.resume_uploaded && (
                <div className="alert alert-warning">We have not received your resume.</div>
              )}
              <div className="message">
                <p>
                  <strong>Hello {fullName}</strong>,
                </p>
                <p>
                  {applicant.resume_uploaded
                    ? 'Thank you for providing your resume; we have added it to your file. Please check your email for information about the state-mandated background check.'
                    : 'We have not yet received your resume. We will not be able to review your application until you submit a resume.'}
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
                <hr />
                <p style={{ textAlign: 'center' }}>
                  <em>
                    Please note that due to an extremely high number of applications, we are not able to respond to
                    every email. We appreciate your continued patience.
                  </em>
                </p>
              </div>
            </Panel>
            {applicant.comments.length > 0 && (
              <Panel header="Comments" toggleable={true}>
                <table className="table table-bordered table-striped table-hoverable table-sm">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicant.comments.map((comment) => (
                      <tr>
                        <td>
                          {moment(comment.timestamp)
                            .tz('America/Detroit')
                            .format('lll')}
                        </td>
                        <td>{comment.body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Panel>
            )}
          </div>
        </div>
      </LeftAligned>
    </div>
  )
}
export default Show
