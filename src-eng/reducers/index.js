import { combineReducers } from 'redux';
import dataOnline from './dataOnline';
import instructionDetail from './instructionDetail';
import dataCash from './dataCash';
import instructionDetailCash from './instructionsDetailCash';


const rootReducer = combineReducers({
  active_dataCash: instructionDetailCash,
  dataCash: dataCash,
 }
)

export default rootReducer