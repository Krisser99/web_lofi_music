import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useDispatch, useSelector } from 'react-redux'
import { changeMoodStatus, changeRainStatus, changeValueStatus } from '../../redux/actions'
import NoiseSound from '../NoiseSoud/NoiseSound'
import './ModifiedBoard.scss'
function ModifiedBoard() {
  const moodState = useSelector(state => state.moodState)
  const volumeState = useSelector(state => state.volumeState)
  const rainState = useSelector(state => state.rainState)

  const { rainValue } = rainState

  const dispatch = useDispatch()

  const { mood } = moodState

  const { volume } = volumeState

  const [openMood, setOpenMood] = useState(false)
  const [rainCity, setRainCity] = useState(rainValue)
  const [traffic, setTraffic] = useState(0)
  const [fireplace, setFireplace] = useState(0)
  const [snow, setSnow] = useState(0)
  const [storm, setStorm] = useState(0)
  const [fan, setFan] = useState(0)
  const [forest, setForest] = useState(0)
  const [wave, setWave] = useState(0)
  const [wind, setWind] = useState(0)
  const [people, setPeople] = useState(0)
  const [river, setRiver] = useState(0)
  const [rainForest, setRainForest] = useState(0)


  const handleChangeMood = (e) => {
    const moodValue = e.target.id
    dispatch(changeMoodStatus(moodValue))
  }

  const handleChangeVolume = (e) => {
    dispatch(changeValueStatus(e.target.value))
  }

  const handleOpenMood = () => {
    setOpenMood(!openMood)
  }

  const handleChangeRain = (e) => {
    if (e.target.value > 0) dispatch(changeRainStatus('clear', rainCity, true))
    else if (e.target.value === 0) dispatch(changeRainStatus('rain', 0, false))
    setRainCity(e.target.value)
  }

  return (
    <>
      <div className="modified">
        <div className={`mood__icon ${openMood && 'active'}`}>
          <i onClick={handleOpenMood} className='fas fa-sliders-h fa-2x'></i>
        </div>
        {/* Close Modified */}
        {!openMood && 
        <NoiseSound 
          traffic={traffic}
          fireplace={fireplace}
          snow={snow}
          storm={storm}
          fan={fan}
          forest={forest}
          wave={wave}
          wind={wind}
          people={people}
          river={river}
          rainForest={rainForest}
        />
        }
        {/* Open Modified */}
        {openMood &&
          <div className="wrapper">
            <h4 className='mood__title'>Mood</h4>
            <div className="mood__option">
              <div
                id='sleep'
                className={`mood__type ${mood === 'sleep' ? 'active' : ''}`}
                onClick={handleChangeMood}
              >
                <i id='sleep' className='fas fa-moon fa-2x'></i>
                <span id='sleep' className='mood__text'>Sleep</span>
              </div>
              <div
                id='jazzy'
                className={`mood__type ${mood === 'jazzy' ? 'active' : ''}`}
                onClick={handleChangeMood}
              >
                <i id='jazzy' className='fas fa-guitar fa-2x'></i>
                <span id='jazzy' className='mood__text'>Jazzy</span>
              </div>
              <div
                id='chill'
                className={`mood__type ${mood === 'chill' ? 'active' : ''}`}
                onClick={handleChangeMood}
              >
                <i id='chill' className='fas fa-coffee fa-2x'></i>
                <span id='chill' className='mood__text'>Chill</span>
              </div>
            </div>
            <div className="volume">
              <Stack
                spacing={2}
                direction='row'
                sx={{ mb: 1 }}
                alignItems='center'
              >
                <i className='fas fa-volume-down fa-lg'></i>
                <Slider
                  className='volume__slider'
                  value={volume}
                  onChange={handleChangeVolume}
                />
                <i className='fas fa-volume-up fa-lg'></i>
              </Stack>
            </div>

            <h4 className='noise__title'>Background Noise</h4>
            <div className="background__noise">
              <div className='noise__options'>
                <span>City traffic</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/city_traffic.mp3'
                  loop
                  autoPlay
                  volume={traffic / 100}
                />
                <Slider className='slider' value={traffic} onChange={(e) => setTraffic(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>City rain</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/rain_city.mp3'
                  loop
                  autoPlay
                  muted
                />
                <Slider className='slider' value={rainValue} onChange={handleChangeRain} />
              </div>
              <div className='noise__options'>
                <span>Fireplace</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/fireplace.mp3'
                  loop
                  autoPlay
                  volume={fireplace / 100}
                />
                <Slider className='slider' value={fireplace} onChange={(e) => setFireplace(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Snow</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/snow.mp3'
                  loop
                  autoPlay
                  volume={snow / 100}
                />
                <Slider className='slider' value={snow} onChange={(e) => setSnow(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Summer Storm</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/summer_storm.mp3'
                  loop
                  autoPlay
                  volume={storm / 100}
                />
                <Slider className='slider' value={storm} onChange={(e) => setStorm(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Fan</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/fan.mp3'
                  loop
                  autoPlay
                  volume={fan / 100}
                />
                <Slider className='slider' value={fan} onChange={(e) => setFan(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Forest Night</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/forest_night.mp3'
                  loop
                  autoPlay
                  volume={forest / 100}
                />
                <Slider className='slider' value={forest} onChange={(e) => setForest(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Wind</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/wind.mp3'
                  loop
                  autoPlay
                  volume={wind / 100}
                />
                <Slider className='slider' value={wind} onChange={(e) => setWind(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Wave</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/waves.mp3'
                  loop
                  autoPlay
                  volume={wave / 100}
                />
                <Slider className='slider' value={wave} onChange={(e) => setWave(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>People</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/people_talk_inside.mp3'
                  loop
                  autoPlay
                  volume={people / 100}
                />
                <Slider className='slider' value={people} onChange={(e) => setPeople(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>River</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/river.mp3'
                  loop
                  autoPlay
                  volume={river / 100}
                />
                <Slider className='slider' value={river} onChange={(e) => setRiver(e.target.value)} />
              </div>
              <div className='noise__options'>
                <span>Rain Forest</span>
                <ReactAudioPlayer
                  preload='auto'
                  src='/assets/musics/rain_forest.mp3'
                  loop
                  autoPlay
                  volume={rainForest / 100}
                />
                <Slider className='slider' value={rainForest} onChange={(e) => setRainForest(e.target.value)} />
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default ModifiedBoard