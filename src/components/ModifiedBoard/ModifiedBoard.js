import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useDispatch, useSelector } from 'react-redux'
import { changeMoodStatus, changeRainStatus, changeSceneStatus, changeValueVolumeStatus } from '../../redux/actions'
import CountDownTimer from '../CountDownTimer/CountDownTimer'
import NoiseSound from '../NoiseSoud/NoiseSound'
import TodoList from '../TodoList/TodoList'
import './ModifiedBoard.scss'
function ModifiedBoard(props) {
  const { seconds, minutes, hours, isRunning, pause, resume, timerStart, setTimerStart, OnStartTimer } = props
  const moodState = useSelector(state => state.moodState)
  const volumeState = useSelector(state => state.volumeState)
  const rainState = useSelector(state => state.rainState)
  const backgroundState = useSelector(state => state.backgroundState)

  const dispatch = useDispatch()

  const { mood } = moodState
  const { volume } = volumeState
  const { rainValue } = rainState
  const { background } = backgroundState

  const [openMood, setOpenMood] = useState(false)
  const [openWall, setOpenWall] = useState(false)
  const [openScene, setOpenScene] = useState(false)
  const [openFocus, setOpenFocus] = useState(false)

  const [openChillVabes, setOpenChillVabes] = useState(false)
  const [openKyoto, setOpenKyoto] = useState(false)
  const [openCafeShop, setOpenCafeShop] = useState(false)

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
    dispatch(changeValueVolumeStatus(e.target.value))
  }

  const handleChangeRain = (e) => {
    if (e.target.value > 0) dispatch(changeRainStatus('clear', rainCity, true))
    else if (e.target.value === 0) dispatch(changeRainStatus('rain', 0, false))
    setRainCity(e.target.value)
  }

  const handleOpenMood = () => {
    setOpenMood(!openMood)
    setOpenWall(false)
    setOpenScene(false)
    setOpenFocus(false)
  }

  const handleOpenWall = () => {
    if (openWall === false && openScene === false) {
      setOpenWall(true)
    } else if (openWall === false && openScene === true) {
      setOpenScene(false)
    } else {
      setOpenWall(false)
    }
    setOpenMood(false)
    setOpenChillVabes(false)
    setOpenKyoto(false)
    setOpenCafeShop(false)
    setOpenFocus(false)
  }

  const handleOpenFocus = () => {
    setOpenFocus(!openFocus)
    setOpenMood(false)
    setOpenWall(false)
    setOpenScene(false)
  }

  const handleSwitchScene = (e) => {
    dispatch(changeSceneStatus(e.target.id))
  }

  const handleOpenChillVabes = () => {
    setOpenWall(false)
    setOpenScene(true)
    setOpenChillVabes(true)
  }

  const handleOpenKyoto = () => {
    setOpenScene(true)
    setOpenWall(false)
    setOpenKyoto(true)
  }

  const handleOpenCafeShop = () => {
    setOpenScene(true)
    setOpenWall(false)
    setOpenCafeShop(true)
  }

  const handleOutScene = () => {
    setOpenScene(false)
    setOpenWall(true)
    setOpenChillVabes(false)
    setOpenKyoto(false)
    setOpenCafeShop(false)
  }

  return (
    <>
      <div className="modified">
        <div className={`mood__icon ${openMood && 'active'}`}>
          <i onClick={handleOpenMood} className='fas fa-sliders-h fa-2x'></i>
        </div>
        {/* Close Mood */}
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
        {/* Open Mood */}
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
              {
                background === 'kyoto_inside' || background === 'kyoto_outside' || background === 'cafeshop_outside' ? '' :
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
              }
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
        <div className={`background_icon ${openWall && 'active'} ${openScene && 'active'}`}>
          <i onClick={handleOpenWall} className="fa-solid fa-images fa-2x"></i>
        </div>
        {/* Open Wall */}
        {openWall &&
          <div className="wall__wrap">
            <div className="wall__wrap-image">
              <h4 className='wall__title'>Change Set</h4>
              <div className={`wall__image ${background === 'chill_vibes' ? 'active' : ''}`}>
                <img
                  onClick={handleOpenChillVabes}
                  src="/assets/thumbs/chill.6d5d8ab2260cceaa865d.png"
                  alt="hola"
                />
              </div>
              <div className={`wall__image ${background === 'kyoto_inside' || background === 'kyoto_outside' ? 'active' : ''}`}>
                <img
                  onClick={handleOpenKyoto}
                  src="/assets/thumbs/kyotoStreet.e4638e91998fa8a106ed.png"
                  alt="hola"
                />
              </div>
              <div className={`wall__image ${background === 'cafeshop_inside' || background === 'cafeshop_outside' ? 'active' : ''}`}>
                <img
                  onClick={handleOpenCafeShop}
                  src="/assets/thumbs/book-cafe-preview.2fafe972d1a37ef69971.png"
                  alt="hola"
                />
              </div>
            </div>
          </div>
        }
        {/* Open Scene */}
        {openScene &&
          <div className="wall__chill-wrap">
            <div className="wall__chill-header">
              <i onClick={handleOutScene} className="fa-solid fa-angle-left fa-2x"></i>
              <h4 className='wall__title'>Switch Scense</h4>
            </div>
            {openChillVabes &&
              <>
                <div id='chill_vibes' className={`wall__chill-image ${background === 'chill_vibes' ? 'active' : ''}`}>
                  <img
                    id='chill_vibes'
                    onClick={handleSwitchScene}
                    src="/assets/thumbs/bed-room.325fe2dadb340cf1c1c0.png"
                    alt="hola"
                  />
                </div>
                <div className='wall__chill-image disable'>
                  <img
                    src="/assets/thumbs/living-room.4a22430fd6a72bd221e9.png"
                    alt="hola" />
                </div>
              </>
            }
            {openKyoto &&
              <>
                <div id='kyoto_outside' className={`wall__chill-image ${background === 'kyoto_outside' ? 'active' : ''}`}>
                  <img
                    id='kyoto_outside'
                    onClick={handleSwitchScene}
                    src="/assets/thumbs/kyotoStreet.e4638e91998fa8a106ed.png"
                    alt="hola"
                  />
                </div>
                <div id='kyoto_inside' className={`wall__chill-image ${background === 'kyoto_inside' ? 'active' : ''}`}>
                  <img
                    id='kyoto_inside'
                    onClick={handleSwitchScene}
                    src="/assets/thumbs/kyotoPark.b51ea664f53e787e33b3.png"
                    alt="hola"
                  />
                </div>
              </>
            }
            {openCafeShop &&
              <>
                <div id='cafeshop_outside' className={`wall__chill-image ${background === 'cafeshop_outside' ? 'active' : ''}`}>
                  <img
                    id='cafeshop_outside'
                    onClick={handleSwitchScene}
                    src="/assets/thumbs/book_cafe_preview_out.aeae5beef7737b9ae88e.png"
                    alt="hola"
                  />
                </div>
                <div id='cafeshop_inside' className={`wall__chill-image ${background === 'cafeshop_inside' ? 'active' : ''}`}>
                  <img
                    id='cafeshop_inside'
                    onClick={handleSwitchScene}
                    src="/assets/thumbs/book_cafe_preview_in.cf06fd4a92871f248f72.png"
                    alt="hola"
                  />
                </div>
              </>
            }
          </div>
        }
        <div className={`focus__icon ${openFocus && 'active'}`}>
          <i onClick={handleOpenFocus} className='fas fa-book-reader fa-2x'></i>
        </div>
        {openFocus &&
          <>
            <div className='focus__content'>
              <CountDownTimer
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                isRunning={isRunning}
                pause={pause}
                resume={resume}
                timerStart={timerStart}
                setTimerStart={setTimerStart}
                OnStartTimer={OnStartTimer}
              />
              <TodoList />
            </div>
          </>
        }
      </div>
    </>
  )
}

export default ModifiedBoard