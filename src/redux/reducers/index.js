import {combineReducers} from 'redux'
import modeReducer from './modeReducer'
import moodReducer from './moodReducer'
import rainReducer from './rainReducer'
import volumeReducer from './volumeReducer'


const rootReducer = combineReducers({
  modeState: modeReducer,
  rainState: rainReducer,
  moodState: moodReducer,
  volumeState: volumeReducer,
})


export default rootReducer