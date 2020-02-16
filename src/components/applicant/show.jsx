import styled from '@emotion/styled';
import moment from 'moment-timezone';
import NameCase from 'namecase';
import { Panel } from 'primereact/panel';
import React from 'react';

import NewComment from './new_comment';
import UploadResume from './upload';

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
            <NewComment applicant={applicant} />
          </div>
          <div className="col-md-8">
            <Panel header="Application Status" toggleable={true}>
              {applicant.resume_uploaded && <div className="alert alert-success">We have received your resume.</div>}
              {!applicant.resume_uploaded && (
                <div className="alert alert-warning">We have not received your resume.</div>
              )}
              <div className="message">
                <p>
                  <strong>Hello {fullName}</strong>,
                </p>
                <p>Thank you for taking the first step and filling out your employment application at Pincanna.com</p>
                <p>
                  {applicant.resume_uploaded
                    ? 'Thank you for your interest in a career at Pincanna. We have received your uploaded resume and have added it to your file. Your application is now complete and under review.'
                    : '<b>Please check your email for instructions on how to upload your resume to complete your application.</b><br/><br/>Once your application is complete, your application will be reviewed. If your application and experience aligns with one of our open positions, our hiring team will reach out to you.'}
                </p>
                <p>
                  Thank you,
                  <br />
                  The Pincanna Team
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
