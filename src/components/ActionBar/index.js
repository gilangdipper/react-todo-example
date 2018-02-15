import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ActionBarWrapper } from './index.style'
import { TODO_ALL, TODO_COMPLETED, TODO_INCOMPLETED } from '../../constants/ActionTypes'
import ButtonFilter from '../../containers/ButtonFilter'

class ActionBar extends Component {
  renderActionButton = (content, buttonType) => {
    return (
      <ButtonFilter
        filter={buttonType}
      >
        {content}
      </ButtonFilter>
    )
  }

  handleChanged = buttonType => {
    if (this.props.onChange) {
      this.props.onChange(buttonType)
    }
  }

  renderActionBar = actionType => {
    return (
      <Fragment>
        {this.renderActionButton('All', TODO_ALL)}
        {this.renderActionButton('Completed', TODO_COMPLETED)}
        {this.renderActionButton('Incompleted', TODO_INCOMPLETED)}
      </Fragment>
    )
  }

  render() {
    const { type } = this.props
    return (
      <ActionBarWrapper>
        {this.renderActionBar(type)}
      </ActionBarWrapper>
    )
  }
}

ActionBar.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
}

export default ActionBar