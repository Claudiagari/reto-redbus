import {connect} from 'react-redux';
import InstructionsCash from '../components/InstructionsCash';

function mapStateToProps(state) {
  return {dataInstructionsCash: state.active_dataCash}
}

export default connect(mapStateToProps)(InstructionsCash)