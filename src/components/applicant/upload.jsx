import React, { useState } from 'react'
import axios from 'axios'
import { resumeUploaded } from '../../actions/applicant'
import { ProgressSpinner } from 'primereact/progressspinner'

const UploadResume = (props) => {
  const [loading, setLoading] = useState(false)
  const fileField = React.createRef()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    const file = fileField.current.files[0]
    await setLoading(true)
    formData.append('applicant[certificate]', file)
    console.log(file)
    axios
      .patch(`https://gateway.pincanna.com/api/v1/applicants/${props.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .then(async (data) => {
        if (data.updated === true) {
          alert('Resume uploaded!')
          resumeUploaded(data)
          await setLoading(false)
        } else {
          alert('Error uploading resume.')
          await setLoading(false)
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="upload-resume">
      {loading && <ProgressSpinner />}
      {!loading && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="applicant-certificate" style={{ color: 'red', fontWeight: 800, textAlign: 'center' }}>
              Please upload a resume to complete your application:
            </label>
            <input
              type="file"
              name="applicant[certificate]"
              id="applicant-certificate"
              ref={fileField}
              className="form-control"
            />
          </div>
          <input type="submit" value="Upload" className="btn btn-outline-primary" />
        </form>
      )}
    </div>
  )
}

export default UploadResume
