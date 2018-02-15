import { connect } from 'react-redux'
import { setStateFilter } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
  actionType: state.visibilityFilter,
  type: ownProps.filter,
  onClick: ownProps.onClick,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setStateFilter(ownProps.filter))
  }
})

const ButtonFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonFilter
