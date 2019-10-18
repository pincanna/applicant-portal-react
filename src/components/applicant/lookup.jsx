import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchApplicantSuccess } from '../../actions/applicant'
import styled from '@emotion/styled'

const PaddedTop = styled.div`
  padding-top: 25px;
`

const Lookup = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [locatorID, setLocatorID] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        `https://gateway.pincanna.com/api/v1/applicants/${locatorID}.json?firstName=${firstName}&lastName=${lastName}`,
      )
      .then((value) => value.data)
      .then((data) => fetchApplicantSuccess(data))
      .catch((error) => console.error(error))
  }
  return (
    <PaddedTop>
      <div className="container">
        <div className="card border-primary mb-3">
          <h5 className="card-header">Applicant Portal</h5>
          <div className="card-body">
            <div className="alert alert-primary">
              <strong>Please enter your information below to view your employment application:</strong>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="locator_id">Locator ID</label>
                <input
                  type="text"
                  name="locator_id"
                  className="form-control"
                  value={locatorID}
                  onChange={(e) => setLocatorID(e.target.value)}
                  placeholder="P000000A"
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Lookup" className="btn btn-outline-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </PaddedTop>
  )
}

export default connect(
  null,
  { fetchApplicantSuccess },
)(Lookup)
