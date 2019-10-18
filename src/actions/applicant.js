import ActionTypes from '../constants/actionTypes'
import store from '../store'

export function fetchApplicantSuccess(data) {
  store.dispatch({
    type: ActionTypes.LOAD_APPLICANT_SUCCESS,
    payload: data
  })
}
