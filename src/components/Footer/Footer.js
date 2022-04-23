import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { chill, jazzy, sleep } from '../../data/songData'
import Player from '../Player/Player'
import './Footer.scss'
function Footer() {
  const moodState = useSelector(state => state.moodState)
  const { mood } = moodState
  const [currentSongIndex, setCurrentSongIndex] = useState(0)


  return (
    <>
      <div className="footer__wrap">
        <div className="song__info">
          {
            mood === 'chill' ? <span>Song name: {chill[currentSongIndex].name}</span> :
              mood === 'jazzy' ? <span>Song name: {jazzy[currentSongIndex].name}</span> :
                <span>Song name: {sleep[currentSongIndex].name}</span>
          }
        </div>
        <div className="controller">
          {
            mood === 'chill' ?
              <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={chill}
                mood={mood}
              /> :
              mood === 'jazzy' ?
                <Player
                  currentSongIndex={currentSongIndex}
                  setCurrentSongIndex={setCurrentSongIndex}
                  songs={jazzy}
                  mood={mood}
                /> :
                <Player
                  currentSongIndex={currentSongIndex}
                  setCurrentSongIndex={setCurrentSongIndex}
                  songs={sleep}
                  mood={mood}
                />
          }

        </div>
      </div>
    </>
  )
}

export default Footer