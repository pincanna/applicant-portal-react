import React, { useEffect } from 'react'
import { fetchApplicantSuccess } from '../actions/applicant'
import { connect } from 'react-redux'
import Lookup from '../components/applicant/lookup'
import Show from '../components/applicant/show'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import qs from 'qs'
import axios from 'axios'

const ApplicantContainer = (props) => {
  window.rt = props.location
  window.qs = qs
  const query = qs.parse(props.location.search.split('?')[1])
  useEffect(() => {
    if (query.access_token) {
      axios
        .get(`https://gateway.pincanna.com/api/v1/applicants/00000.json?accessKey=${query.access_token}`)
        .then((res) => res.data)
        .then((data) => fetchApplicantSuccess(data))
        .catch((err) => console.error(err))
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      {' '}
      {!props.applicant.loaded && (
        <p>
          Please visit <a href="http://portal.pincanna.com/employment">portal.pincanna.com/employment</a>
        </p>
      )}{' '}
      {props.applicant.loaded && (
        <div>
          <Show applicant={props.applicant} />{' '}
        </div>
      )}{' '}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    applicant: state.applicant,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchApplicantSuccess,
  },
)(ApplicantContainer)
