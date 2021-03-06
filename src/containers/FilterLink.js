import {connect} from 'react-redux';
import { setHoldFilter, setShineFilter, setHairlengthFilter, setHairtypeFilter, resetFilter } from '../actions/index'; 
import Link from '../components/Link';


const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		switch(ownProps.type){
			case "hold":
				dispatch(setHoldFilter(ownProps.filter))
				break;
			case "shine":
				dispatch(setShineFilter(ownProps.filter))
				break;
			case "hairlength":
				dispatch(setHairlengthFilter(ownProps.filter))
				break;
			case "hairtype":
				dispatch(setHairtypeFilter(ownProps.filter))
				break;
			case "reset":
				dispatch(resetFilter())
				break;
			default:
				throw new Error ("no type")
		}
	}
})

export default connect(null, mapDispatchToProps)(Link)