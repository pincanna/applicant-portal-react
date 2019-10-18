import React from 'react'
import NameCase from 'namecase'
// import moment from 'moment'
import moment from 'moment-timezone'

const Show = ({ applicant }) => {
  const fullName = NameCase(`${applicant.firstName} ${applicant.lastName}`)
  return (
    <div className="container">
      <h1>{fullName}</h1>
      <dl>
        <dt>Application #</dt>
        <dd>{applicant.applicationID}</dd>

        <dt>Entry Date</dt>
        <dd>
          {moment(applicant.entryDate)
            .tz('America/Detroit')
            .format('MMMM Do, YYYY, h:mmA z')}
        </dd>

        <dt>Address</dt>
        <dd>
          {applicant.street_address} <br />
          {applicant.city}, {applicant.state} {applicant.zip}
        </dd>

        <dt>Resume Status</dt>
        <dd>{applicant.resume_uploaded ? 'We have received your resume' : 'Please upload your resume.'}</dd>

        <dt>Comments</dt>
        <dd>
          {applicant.comments.length > 0 ? (
            <table className="table table-striped table-sm table-bordered">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {applicant.comments.map((comment) => (
                  <tr key={comment.timestamp}>
                    <td>
                      {moment(comment.timestamp)
                        .tz('America/Detroit')
                        .format('MMMM Do, YYYY, h:mmA z')}
                    </td>
                    <td>{comment.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            'No comments'
          )}
        </dd>
      </dl>
    </div>
  )
}

export default Show
