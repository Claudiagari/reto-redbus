import {connect} from 'react-redux';
import Instructions from '../components/Instructions';

function mapStateToProps(state) {
  return {dataInstructions: state.active_data}
}

export default connect(mapStateToProps)(Instructions)