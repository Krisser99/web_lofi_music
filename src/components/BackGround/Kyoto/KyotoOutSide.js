import React from 'react'

function KyotoOutSide(props) {
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
        <source src='/assets/video/Kyoto+Street+-+Day.mp4' type='video/mp4'></source>
      </video>
      {/* Night */}
      <video 
        className={mode === 'night' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Kyoto+Street+-+Night.mp4' type='video/mp4'></source>
      </video>
    </>
  )
}

export default KyotoOutSide