import {SET_BACKGROUND} from '../constants/actionType'


const initialValue = {
  background: 'chill_vibes'
}

const backgroundReducer = (state = initialValue, action) => {
  switch(action.type) {
    case SET_BACKGROUND: {
      return {
        ...state,
        background: action.background
      }
    }
    default: {
      return state
    } 
  }
}

export default backgroundReducer