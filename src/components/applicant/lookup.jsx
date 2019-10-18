import React, { useState } from 'react'

const Lookup = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [locatorID, setLocatorID] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('submitted')
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

export default Lookup
