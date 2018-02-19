import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id })
export const removeTodo = id => ({ type: types.REMOVE_TODO, id })
export const setStateFilter = (filter) => ({
	type: types.FILTER_TODO_BY_STATE,
	filter
})
export const setKeywordFilter = (keyword) => ({
	type: types.FILTER_TODO_BY_KEYWORD,
	keyword
})
