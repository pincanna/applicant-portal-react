import React from 'react'
import axios from 'axios'
import { resumeUploaded } from '../../actions/applicant'

const UploadResume = (props) => {
  const fileField = React.createRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    let file = fileField.current.files[0]
    var formData = new FormData()
    formData.append('applicant[certificate]', file)
    console.log(file)
    axios
      .patch(`http://localhost:5300/api/v1/applicants/${props.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .then((data) => {
        if (data.updated == true) {
          alert('Resume uploaded!')
          resumeUploaded(data)
        } else {
          alert('Error uploading resume.')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="upload-resume">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="applicant-certificate">Resume</label>
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
    </div>
  )
}

export default UploadResume
