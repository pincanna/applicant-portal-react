import ActionTypes from '../constants/actionTypes'
import {
  Action
} from 'rxjs/internal/scheduler/Action'

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
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
  accessKey: ''
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_APPLICANT:
      return {
        ...state, loading: true
      }
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
          case ActionTypes.RESUME_UPLOAD_SUCCESS:
            return {
              ...state, resume_uploaded: true
            }
            default:
              return state
  }
}
