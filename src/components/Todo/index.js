import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

class Todo extends Component {
  renderItem = item => (
    <Item
      key={item.id}
      status={item.status}
      onAddClick={() => this.props.onTodoClick(item.id)}
      onRemoveClick={() => this.props.onRemoveClick(item.id)}
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