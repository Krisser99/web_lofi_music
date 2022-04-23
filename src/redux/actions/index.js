import { ADD_LIST, DONE_LIST, EDIT_LIST, REMOVE_LIST, SET_BACKGROUND, SET_MODE, SET_MOOD, SET_RAIN, SET_VOLUME, } from "../constants/actionType"


export const setMode = payload => ({
  type: SET_MODE,
  mode: payload
})

export const setRain = (payload, value, bool) => ({
  type: SET_RAIN,
  rainMode: payload,
  rainValue: value,
  iconChange: bool
})

export const setMood = payload => ({
  type: SET_MOOD,
  mood: payload
})

export const setVolume = payload => ({
  type: SET_VOLUME,
  volume: payload
})

export const setBackGround = payload => ({
  type: SET_BACKGROUND,
  background: payload
})

export const addList = content => dispatch => (
  dispatch({
    type: ADD_LIST,
    payload: {
      content: content,
      finish: false
    }
  }))

export const doneList = payload => dispatch => (
  dispatch({
    type: DONE_LIST,
    payload: payload
  })
)

export const removeList = payload => dispatch => (
  dispatch({
    type: REMOVE_LIST,
    payload: payload
  })
)

export const editList = payload => ({
  trpe: EDIT_LIST,
  payload: payload
})

export const changeDayNight = (currentStatus) => {
  let status
  if (currentStatus === 'day') {
    status = 'night'
  } else if (currentStatus === 'night') {
    status = 'day'
  }

  return (dispatch) => {
    dispatch(setMode(status))
  }
}

export const changeRainStatus = (currentStatus, value, bool) => {
  console.log(currentStatus)
  let status
  if (currentStatus === 'clear') {
    status = 'rain'
    bool = true
  } else if (currentStatus === 'rain') {
    status = 'clear'
    bool = false
  }
  console.log(status)
  return (dispatch) => {
    dispatch(setRain(status, value, bool))
  }
}


export const changeMoodStatus = currentStatus => {
  return dispatch => {
    dispatch(setMood(currentStatus))
  }
}

export const changeValueVolumeStatus = currentStatus => {
  return dispatch => {
    dispatch(setVolume(currentStatus))
  }
}

export const changeSceneStatus = currentStatus => {
  return dispatch => {
    dispatch(setBackGround(currentStatus))
  }
}

