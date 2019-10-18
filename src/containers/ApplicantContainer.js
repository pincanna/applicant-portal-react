import React from 'react'
import ActionTypes from '../constants/actionTypes'
import { fetchApplicantSuccess } from '../actions/applicant'
import { connect } from 'react-redux'
import Lookup from '../components/applicant/lookup'

const ApplicantContainer = (props) => {
  return (
    <div>
      {!props.applicant.loaded && <Lookup />}
      {props.applicant.loaded && (
        <div>
          <p>Your application id is {props.applicant.applicationID}</p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { applicant: state.applicant }
}

export default connect(
  mapStateToProps,
  { fetchApplicantSuccess },
)(ApplicantContainer)
