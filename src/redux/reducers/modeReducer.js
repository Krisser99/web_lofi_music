import {SET_MODE} from '../constants/actionType'


const initialState = {
  mode: 'day'
}

const modeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MODE: {
      return {
        ...state,
        mode: action.mode
      }
    }
    default: {
      return state
    }
  }
}

export default modeReducer