import ActionTypes from '../constants/actionTypes'
import store from '../store'

export function fetchApplicantSuccess(data) {
  store.dispatch({
    type: ActionTypes.LOAD_APPLICANT_SUCCESS,
    payload: data
  })
}

export function resumeUploaded(data) {
  store.dispatch({
    type: ActionTypes.RESUME_UPLOAD_SUCCESS,
    payload: data
  })
}
