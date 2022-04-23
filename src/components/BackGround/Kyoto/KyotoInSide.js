import React from 'react'

function KyotoInSide(props) {

  const {mode} = props
  return (
    <>
      {/* Day */}
      <video
        className={mode === 'day' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Kyoto+Park+-+Day.mp4' type='video/mp4'></source>
      </video>
      {/* Night */}
      <video
        className={mode === 'night' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Kyoto+Park+-+Night.mp4' type='video/mp4'></source>
      </video>
    </>
  )
}

export default KyotoInSide