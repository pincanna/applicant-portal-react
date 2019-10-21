import React from 'react'
import { Panel } from 'primereact/panel'
import Axios from 'axios'

const NewComment = (props) => {
  const [body, setBody] = React.useState('')
  const { applicant } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post(`https://gateway.pincanna.com/api/v1/applicants/${applicant.locatorID}/comments`, {
      body: body,
    })
      .then((res) => res.data)
      .then((data) => {
        alert('Message sent.')
        setBody('')
      })
      .catch((err) => alert('Your message was not sent.'))
  }

  return (
    <Panel header="Post a Comment" toggleable={true}>
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
    </Panel>
  )
}

export default NewComment
