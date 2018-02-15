import { FILTER_TODO_BY_KEYWORD } from '../constants/ActionTypes'

const initialState = '';

const keywordFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TODO_BY_KEYWORD:
      return action.keyword
    default:
      return state
  }
}

export default keywordFilter
