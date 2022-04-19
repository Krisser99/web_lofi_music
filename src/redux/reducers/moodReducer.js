import { SET_MOOD } from "../constants/actionType"


const initialMood = {
  mood: 'chill'
}

const moodReducer = (state = initialMood, action) => {
  switch(action.type) {
    case SET_MOOD: {
      return {
        ...state,
        mood: action.mood
      }
    }
    default: {
      return state
    }
  }
} 

export default moodReducer