import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id })

export const setStateFilter = (filter) => ({
	type: types.FILTER_TODO_BY_STATE,
	filter
})

export const setKeywordFilter = (keyword) => ({
	type: types.FILTER_TODO_BY_KEYWORD,
	keyword
})
