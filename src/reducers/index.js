import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import keywordFilter from './keywordFilter'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  keywordFilter
})

export default rootReducer
