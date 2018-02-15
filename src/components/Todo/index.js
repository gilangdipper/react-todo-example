import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import ActionBar from '../ActionBar'

class Todo extends Component {

  renderActionBar = type => {
    return <ActionBar type={type} onChange={this.updateShowType} />
  }

  renderItem = item => (
    <Item
      key={item.id}
      status={item.status}
      onClick={() => this.props.onTodoClick(item.id)}
      keyword={this.props.keyword}>
      {item.content}
    </Item>
  )

  render() {
    const { list } = this.props
    
    return (
      <ul>
        {list
          .map(item => this.renderItem(item))}
      </ul>
    )
  }
}

Todo.propTypes = {
  list: PropTypes.array,
  keyword: PropTypes.string,
}

Todo.defaultProps = {
  list: [],
  keyword: '',
}

export default Todo