import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchApplicantSuccess } from '../../actions/applicant'

const Lookup = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [locatorID, setLocatorID] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://gateway.pincanna.com/job_applications/lookup_id', {
        first_name: firstName,
        last_name: lastName,
        entry_id: locatorID,
      })
      .then((value) => value.data)
      .then((data) => fetchApplicantSuccess(data))
      .catch((error) => console.error(error))
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" className="form-control" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="locator_id">Locator ID</label>
          <input
            type="text"
            name="locator_id"
            className="form-control"
            onChange={(e) => setLocatorID(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Lookup" className="btn btn-outline-primary" />
        </div>
      </form>
    </div>
  )
}

export default connect(
  null,
  { fetchApplicantSuccess },
)(Lookup)
