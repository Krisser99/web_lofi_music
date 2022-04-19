import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

function NoiseSound(props) {

  const {
    traffic,
    fireplace,
    snow,
    storm,
    fan,
    people,
    forest,
    wind,
    wave,
    rainForest,
    river } = props
    
  return (
    <>

      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/city_traffic.mp3'
        loop
        autoPlay
        volume={traffic / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/rain_city.mp3'
        loop
        autoPlay
        muted
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/fireplace.mp3'
        loop
        autoPlay
        volume={fireplace / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/snow.mp3'
        loop
        autoPlay
        volume={snow / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/summer_storm.mp3'
        loop
        autoPlay
        volume={storm / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/fan.mp3'
        loop
        autoPlay
        volume={fan / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/forest_night.mp3'
        loop
        autoPlay
        volume={forest / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/wind.mp3'
        loop
        autoPlay
        volume={wind / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/waves.mp3'
        loop
        autoPlay
        volume={wave / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/people_talk_inside.mp3'
        loop
        autoPlay
        volume={people / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/river.mp3'
        loop
        autoPlay
        volume={river / 100}
      />
      <ReactAudioPlayer
        preload='auto'
        src='/assets/musics/rain_forest.mp3'
        loop
        autoPlay
        volume={rainForest / 100}
      />
    </>
  )
}

export default NoiseSound