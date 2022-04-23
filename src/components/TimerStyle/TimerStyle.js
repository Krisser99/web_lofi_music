import React from 'react'
import Digit from '../Digit/Digit'
import './TimerStyle.scss'
function TimerStyle(props) {
  const { hour, minute, second } = props
  return (
    <>
      <div className="timerContainer">
        <Digit value={hour} title='HOURS' />
        <div className="separator-wrap">
          <span className='separator' />
          <span className='separator' />
        </div>
        <Digit value={minute} title='MINUTES' />
        <div className="separator-wrap">
          <span className='separator' />
          <span className='separator' />
        </div>
        <Digit value={second} title='SECONDS' />
      </div>
    </>
  )
}

export default TimerStyle