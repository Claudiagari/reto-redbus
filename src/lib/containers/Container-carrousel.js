import {connect} from 'react-redux';
import CarouselPlaceToPay from '../components/CarouselPlaceToPay';
import selectItem from '../actions/index'
import {bindActionCreators} from 'redux'


function mapStateToProps(state){
  return {dataOnline: state.data}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({onItemClick:selectItem}, dispatch)
  
}
export default connect(mapStateToProps,mapDispatchToProps)(CarouselPlaceToPay)

