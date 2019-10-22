import ActionTypes from '../constants/actionTypes'
import store from '../store'
import axios from 'axios'

export async function fetchApplicant(locatorID, firstName, lastName) {
  return async function (dispatch, getState) {
    try {
      const res = await axios
        .get(
          `https://gateway.pincanna.com/api/v1/applicants/${locatorID}.json?firstName=${firstName}&lastName=${lastName}`,
        )
      const data = res.data
      dispatch(fetchApplicantSuccess(data))
    } catch (error) {
      alert('Please try again.')
      console.log(error)
      dispatch(clearApplicant())
    }
  }


}

export function fetchApplicantSuccess(data) {
  store.dispatch({
    type: ActionTypes.LOAD_APPLICANT_SUCCESS,
    payload: {
      ...data,
      loading: false
    }
  })
}

export function clearApplicant() {
  store.dispatch({
    type: ActionTypes.CLEAR_APPLICANT
  })
}

export function resumeUploaded(data) {
  store.dispatch({
    type: ActionTypes.RESUME_UPLOAD_SUCCESS,
    payload: data
  })
}
