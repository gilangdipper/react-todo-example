import { FILTER_TODO_BY_STATE, TODO_ALL } from '../constants/ActionTypes'

const visibilityFilter = (state = TODO_ALL, action) => {
  switch (action.type) {
    case FILTER_TODO_BY_STATE:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
