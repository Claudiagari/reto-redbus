import { combineReducers } from 'redux';
import dataOnline from './dataOnline';
import instructionDetail from './instructionDetail'

const rootReducer = combineReducers({
  active_data: instructionDetail
 }
)

export default rootReducer