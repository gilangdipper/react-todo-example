import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants/ActionTypes'

const initialState = [
  { id: 1, content: "eating breakfast ⏰", status: "completed" },
  { id: 2, content: "eating lunch ⏰", status: "incompleted" },
  { id: 3, content: "eating dinner ⏰", status: "incompleted" }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          content: action.text,
          status: "incompleted"
        }
      ]
    
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, status: todo.status === 'completed' ? 'incompleted' : 'completed'} :
          todo
      )

    case REMOVE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    default:
      return state
  }
}
