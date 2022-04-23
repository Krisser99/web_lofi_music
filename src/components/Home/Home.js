import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {useTimer} from 'react-timer-hook'
import ChillVibes from '../BackGround/ChillVibes/ChillVibes'
import KyotoOutSide from '../BackGround/Kyoto/KyotoOutSide'
import KyotoInSide from '../BackGround/Kyoto/KyotoInSide'
import BookCafeInSide from '../BackGround/BookCafe/BookCafeInSide'
import BookCafeOutSide from '../BackGround/BookCafe/BookCafeOutSide'
import ModifiedBoard from '../ModifiedBoard/ModifiedBoard'
import RainToggleButton from '../RainToggleButton/RainToggleButton'
import './Home.scss'
import Footer from '../Footer/Footer'
import Youtube from '../Youtube/Youtube'


function Home() {
  const modeState = useSelector(state => state.modeState)
  const rainState = useSelector(state => state.rainState)
  const backgroundState = useSelector(state => state.backgroundState)

  const { background } = backgroundState
  const { mode } = modeState
  const { rainMode } = rainState
  const combieMode = `${mode}-${rainMode}`

  const [timerStart, setTimerStart] = useState(false)
  const expiryTimestamp = new Date()
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0)

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => setTimerStart(false)
  })

  const handleStartTimer = (hour, minute, second) => {
    const time = new Date()
    const timeSet = (Number(hour)*3600 + Number(minute)*60 + Number(second))
    time.setSeconds(time.getSeconds() + timeSet)
    restart(time)
  }


  return (
    <>
      {
        background === 'chill_vibes' ?
          <>
            <ChillVibes combieMode={combieMode} />
            <RainToggleButton />
          </> : ''
      }
      {
        background === 'kyoto_outside' ?
          <>
            <KyotoOutSide mode={mode} />
          </> : ''
      }
      {
        background === 'kyoto_inside' ?
          <>
            <KyotoInSide mode={mode} />
          </> : ''
      }
      {
        background === 'cafeshop_outside' ?
          <>
            <BookCafeOutSide mode={mode} />
          </> : ''
      }
      {
        background === 'cafeshop_inside' ?
          <>
            <BookCafeInSide combieMode={combieMode} />
            <RainToggleButton />
          </> : ''
      }

      <ModifiedBoard
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isRunning={isRunning}
        pause={pause}
        resume={resume}
        timerStart={timerStart}
        setTimerStart={setTimerStart}
        OnStartTimer={handleStartTimer}
      />
      <Youtube />
      <Footer />
    </>
  )
}

export default Home