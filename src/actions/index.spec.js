import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).to.deep.equal({
      type: types.ADD_TODO,
      text: 'Use Redux'
    })
  })

  // it('deleteTodo should create DELETE_TODO action', () => {
  //   expect(actions.deleteTodo(1)).toEqual({
  //     type: types.DELETE_TODO,
  //     id: 1
  //   })
  // })

  // it('editTodo should create EDIT_TODO action', () => {
  //   expect(actions.editTodo(1, 'Use Redux everywhere')).toEqual({
  //     type: types.EDIT_TODO,
  //     id: 1,
  //     text: 'Use Redux everywhere'
  //   })
  // })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).to.deep.equal({
      type: types.TOGGLE_TODO,
      id: 1
    })
  })

  // it('completeAll should create COMPLETE_ALL action', () => {
  //   expect(actions.completeAll()).toEqual({
  //     type: types.COMPLETE_ALL
  //   })
  // })

  // it('clearCompleted should create CLEAR_COMPLETED action', () => {
  //   expect(actions.clearCompleted()).toEqual({
  //     type: types.CLEAR_COMPLETED
  //   })
  // })

  it('setStateFilter should set FILTER action', () => {
    expect(actions.setStateFilter(types.TODO_ALL)).to.deep.equal({
      type: types.FILTER_TODO_BY_STATE,
	    filter: types.TODO_ALL
    })
  })
})
