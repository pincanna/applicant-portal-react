import React from 'react'
import ActionTypes from '../constants/actionTypes'
import { fetchApplicantSuccess } from '../actions/applicant'
import { connect } from 'react-redux'
import Lookup from '../components/applicant/lookup'
import Show from '../components/applicant/show'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const ApplicantContainer = (props) => {
  return (
    <div>
      {!props.applicant.loaded && <Lookup />}
      {props.applicant.loaded && (
        <div>
          <Show applicant={props.applicant} />
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
