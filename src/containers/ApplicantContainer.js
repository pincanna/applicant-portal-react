import React from 'react'
import PropTypes from 'prop-types'
import ActionTypes from '../constants/actionTypes'
import { fetchApplicantSuccess } from '../actions/applicant'
import { connect } from 'react-redux'

const ApplicantContainer = (props) => {
  return (
    <div>
      <p>Coming soon</p>
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
