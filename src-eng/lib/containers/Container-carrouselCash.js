import {connect} from 'react-redux';
import CarouselPlaceToPayC from '../components/CarouselPlaceToPayC';
import {selectItemCash} from '../actions/index'
import {bindActionCreators} from 'redux'


function mapStateToProps(state){
  return {dataCash: state.dataCash}
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({onItemClick:selectItemCash}, dispatch)
  
}
export default connect(mapStateToProps,mapDispatchToProps)(CarouselPlaceToPayC)

