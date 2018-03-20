import {connect} from 'react-redux';
import CarouselPlaceToPay from '../components/CarouselPlaceToPay';

function mapStateToProps(state){
  
  return {dataOnline: state.data}
}

export default connect(mapStateToProps)(CarouselPlaceToPay)

