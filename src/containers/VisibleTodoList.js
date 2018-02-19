import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import Todo from '../components/Todo'
import { TODO_ALL, TODO_COMPLETED, TODO_INCOMPLETED } from '../constants/ActionTypes'

const getVisibleTodos = (todos, filter, keywordFilter) => {
  switch (filter) {
    case TODO_ALL:
      return todos.filter(item => item.content.includes(keywordFilter))
    case TODO_COMPLETED:
      return todos.filter(item => item.status==='completed' && item.content.includes(keywordFilter))
    case TODO_INCOMPLETED:
      return todos.filter(item => item.status==='incompleted' && item.content.includes(keywordFilter))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  list: getVisibleTodos(state.todos, state.visibilityFilter, state.keywordFilter),
  keyword: state.keywordFilter
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onRemoveClick: removeTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default VisibleTodoList
