import React from 'react'

function BookCafeOutSide(props) {
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
        <source src='/assets/video/Exterior+-+Day.mp4' type='video/mp4'></source>
      </video>
      {/* Night */}
      <video 
        className={mode === 'night' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Exterior+-+Night.mp4' type='video/mp4'></source>
      </video>
    </>
  )
}

export default BookCafeOutSide