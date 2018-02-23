import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ActionBarWrapper } from './ActionBar.style'
import { TODO_ALL, TODO_COMPLETED, TODO_INCOMPLETED } from '../constants/ActionTypes'
import { connect } from 'react-redux'
import { setStateFilter } from '../actions'
import Button from '../components/Button'

const ActionBar = ({ actionType, onClick, }) => {
  const renderActionButton = (content, buttonType) =>
    <Button
      actionType={actionType}
      type={buttonType}
      onClick={onClick}
    >
      {content}
    </Button>;

  return (
    <ActionBarWrapper>
      <Fragment>
        {renderActionButton('All', TODO_ALL)}
        {renderActionButton('Completed', TODO_COMPLETED)}
        {renderActionButton('Incompleted', TODO_INCOMPLETED)}
      </Fragment>
    </ActionBarWrapper>
  )
};

ActionBar.propTypes = {
  actionType: PropTypes.string,
  onClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  actionType: state.visibilityFilter
})

const mapDispatchToProps = () => ({
  onClick: setStateFilter
})

const ActionBarComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar)

export default ActionBarComponent