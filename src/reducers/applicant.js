import ActionTypes from '../constants/actionTypes'

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  street_address: null,
  city: null,
  state: null,
  zip: null,
  resume_uploaded: null,
  decision: 'pending',
  loading: false,
  loaded: false,
  error: false,
  applicationID: null,
  locatorID: null,
  entryDate: null,
  comments: [],
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_APPLICANT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loaded: true,
      }
    case ActionTypes.LOAD_APPLICANT_FAILURE:
      return {
        ...state,
        loaded: false,
      }
    case ActionTypes.CLEAR_APPLICANT:
      return initialState
    default:
      return state
  }
}
