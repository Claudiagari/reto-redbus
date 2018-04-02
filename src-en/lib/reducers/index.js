import { combineReducers } from 'redux';
import dataOnline from './dataOnline';
import instructionDetail from './instructionDetail';



const rootReducer = combineReducers({
  active_data: instructionDetail,
  data: dataOnline
 }
)

export default rootReducer