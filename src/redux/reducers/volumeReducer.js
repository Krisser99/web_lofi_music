import { SET_VOLUME } from "../constants/actionType"


const initialVolume = {
  volume: 0
}

const volumeReducer = (state = initialVolume, action) => {
  switch(action.type) {
    case SET_VOLUME: {
      return {
        ...state,
        volume: action.volume
      }
    }
    default: {
      return state
    }
  }
}

export default volumeReducer