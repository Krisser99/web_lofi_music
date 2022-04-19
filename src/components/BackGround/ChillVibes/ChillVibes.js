import React from 'react'

function ChillVibes(props) {

  const {combieMode} = props
  return (
    <>
      {/* Night */}
      <video
        className={combieMode === 'night-clear' ? 'video-in' : 'video-out'}
        loop
        muted
        autoPlay
      >
        <source src='/assets/video/Night-clear.mp4' type='video/mp4'></source>
      </video>
      <video
        className={combieMode === 'night-rain' ? 'video-in' : 'video-out'}
        loop
        muted
        autoPlay
      >
        <source src='/assets/video/Night-rainny.mp4' type='video/mp4'></source>
      </video>
      {/* Day */}
      <video
        className={combieMode === 'day-clear' ? 'video-in' : 'video-out'}
        loop
        muted
        autoPlay
      >
        <source src='/assets/video/Day-sunny.mp4' type='video/mp4'></source>
      </video>
      <video
        className={combieMode === 'day-rain' ? 'video-in' : 'video-out'}
        loop
        muted
        autoPlay
      >
        <source src='/assets/video/Day-rainny.mp4' type='video/mp4'></source>
      </video>
    </>
  )
}

export default ChillVibes