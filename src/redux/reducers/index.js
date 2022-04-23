import {combineReducers} from 'redux'
import backgroundReducer from './backgroundReducer'
import modeReducer from './modeReducer'
import moodReducer from './moodReducer'
import rainReducer from './rainReducer'
import todoReducer from './todoReducer'
import volumeReducer from './volumeReducer'


const rootReducer = combineReducers({
  modeState: modeReducer,
  rainState: rainReducer,
  moodState: moodReducer,
  volumeState: volumeReducer,
  backgroundState: backgroundReducer,
  todoState: todoReducer,
})


export default rootReducer