import {
  combineReducers
} from 'redux'
import counter from './counter'
import applicant from './applicant'

const rootReducer = combineReducers({
  counter,
  applicant
})

export default rootReducer
