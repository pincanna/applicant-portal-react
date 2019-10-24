import React from 'react'
import { Panel } from 'primereact/panel'
import { ProgressSpinner } from 'primereact/progressspinner'
import Axios from 'axios'

const NewComment = (props) => {
  const [body, setBody] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const { applicant } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setLoading(true)
    Axios.post(`https://gateway.pincanna.com/api/v1/applicants/${applicant.locatorID}/comments`, {
      body: body,
    })
      .then((res) => res.data)
      .then((data) => {
        alert('Message sent.')
        setBody('')
        console.log('Posted message.', data)
        /* Axios.get(`https://gateway.pincanna.com/api/v1/applicants/00000.json?accessKey=${applicant.accessKey}`)
          .then((res) => res.data)
          .then((app) => fetchApplicantSuccess(app))
          .catch((err) => console.error(err)) */
      })
      .catch((err) => {
        alert('Your message was not sent.')
        setLoading(false)
      })
    await setLoading(false)
  }

  return (
    <Panel header="Post a Comment" toggleable={true}>
      {loading && <ProgressSpinner />}
      {!loading && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="body">Send a Message</label>
            <textarea
              name="comment[body]"
              id="body"
              body
              rows="4"
              className="form-control"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Send Message" className="btn btn-outline-primary" />
          </div>
        </form>
      )}
    </Panel>
  )
}

export default NewComment
