import React, { useState } from 'react'
import TimerStyle from '../TimerStyle/TimerStyle'
import './CountDownTimer.scss'

function CountDownTimer(props) {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const { seconds, minutes, hours, isRunning, pause, resume, timerStart, setTimerStart, OnStartTimer } = props

  const handleSetUpTime = () => {
    OnStartTimer(hour, minute, second)
    setTimerStart(true)
  }

  return (

    <>
      <div className="countdown">
        <h4>CountDown</h4>
        {timerStart ?
          (<>
            <div className="countdown__running">
              <TimerStyle hour={hours} minute={minutes} second={seconds} />
              <div className="control">
                {isRunning
                  ?
                  (<button onClick={pause}>Pause</button>)
                  :
                  <button className='resume' onClick={resume}>Resume</button>
                }
                <button onClick={() => OnStartTimer(0, 0, 0)}>Cancel</button>
              </div>
            </div>
          </>
          )
          :
          (
            <>
              <div className="countdown__noRunning">
                <div className="countdown__content">
                  <input
                    className='countdown__input'
                    value={hour}
                    type="number"
                    max={24} min={0}
                    onChange={(e) => setHour(e.target.value)}
                  />
                  <span>hours</span>
                  <input
                    className='countdown__input'
                    value={minute}
                    type="number"
                    max={60} min={0}
                    onChange={(e) => setMinute(e.target.value)}
                  />
                  <span>minutes</span>
                  <input
                    className='countdown__input'
                    value={second} 
                    type="number"
                    max={60}
                    min={0}
                    onChange={(e) => setSecond(e.target.value)}
                  />
                  <span>seconds</span>
                </div>
                <button
                  className='countdown__set'
                  onClick={handleSetUpTime}>Set Time</button>
              </div>
            </>
          )}
      </div>
    </>
  )
}

export default CountDownTimer