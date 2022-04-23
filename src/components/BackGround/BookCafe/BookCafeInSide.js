import React from 'react'

function BookCafeInSide(props) {

  const {combieMode} = props

  return (
    <>
      {/* Day */}
      <video
        className={combieMode === 'day-clear' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Interior+-+Sunny+Day.mp4' type='video/mp4'></source>
      </video>
      <video
        className={combieMode === 'day-rain' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Interior+-+Rainy+Day.mp4' type='video/mp4'></source>
      </video>
      {/* Night */}
      <video
        className={combieMode === 'night-clear' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Interior+-+Night.mp4' type='video/mp4'></source>
      </video>
      <video
        className={combieMode === 'night-rain' ? 'video-in' : 'video-out'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Interior+-+Rainy+Night.mp4' type='video/mp4'></source>
      </video>
    </>
  )
}

export default BookCafeInSide