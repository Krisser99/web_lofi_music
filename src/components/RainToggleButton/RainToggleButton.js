import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeRainStatus } from '../../redux/actions/index'
import ReactAudioPlayer from 'react-audio-player'
import './RainToggleButton.scss'

function RainToggleButton() {

  const rainState = useSelector(state => state.rainState)
  const { rainMode, rainValue, iconChange } = rainState
  const dispatch = useDispatch()

  const handleToggleRain = () => {
    if (rainValue === 0) {
      dispatch(changeRainStatus(rainMode, 30))
    } else {
      dispatch(changeRainStatus(rainMode, 0))
    }
  }
  return (
    <>
      <div className="wrap">
        {iconChange && <ReactAudioPlayer
          loop
          preload='auto'
          src='/assets/musics/rain_city.mp3'
          autoPlay
          volume={rainValue / 100}
        />}
        <div
          onClick={handleToggleRain}
          className='toggle'
        >
          <div className={iconChange ? 'icon-rain' : 'icon-clear'}>
            <i className={iconChange ? 'fa-solid fa-cloud-sun sunshine' : 'fas fa-cloud-rain' }></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(RainToggleButton)