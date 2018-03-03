import { combineReducers, redux } from 'redux'
import {
  LOGOUT
} from './actions'
 
function logout(state = [], action) {
  switch (action.type) {
    case LOGOUT:
      return action.filter
    default:
      return state
  }
}


const iwApp = combineReducers({
  logout
})
 
export default iwApp