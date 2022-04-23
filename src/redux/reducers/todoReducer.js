import { ADD_LIST, DONE_LIST, REMOVE_LIST } from "../constants/actionType";



const initialValue = {
  todoList: [],
  repeat: false
}

const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const newTodo = [...state.todoList]
      const isRepeat = newTodo.find(todo => todo.content === action.payload.content)
      newTodo.push(action.payload)
      if (!isRepeat) {
        return {
          ...state,
          todoList: newTodo,
          repeat: false
        }
      } else {
        return {
          ...state,
          repeat: true
        }
      }
    }
    case REMOVE_LIST: {
      const newTodo = [...state.todoList]
      const newListTodo = newTodo.filter(todo => todo.content !== action.payload)
      return {
        ...state,
        todoList: newListTodo
      }
    }
    case DONE_LIST: {
      const newTodo = [...state.todoList]
      const index = newTodo.findIndex(todo => todo.content === action.payload)
      newTodo[index].finish = true
      return {
        ...state,
        todoList: newTodo
      }
    }
    default:
      return state
  }
}

export default todoReducer