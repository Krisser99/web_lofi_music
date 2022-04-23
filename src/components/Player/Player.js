import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './Player.scss'
function Player(props) {
  const { currentSongIndex, setCurrentSongIndex, songs, mood } = props
  const volumeState = useSelector(state => state.volumeState)
  const { volume } = volumeState
  const [isRepeat, setIsRepeat] = useState(false)
  const [isRandom, setIsRandom] = useState(false)

  const [isPlaying, setIsPlaying] = useState(false)
  const audioEl = useRef()
  const numberSongs = songs.length

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
    audioEl.current.volume = volume / 100
  })


  const handleNextSong = () => {
    setCurrentSongIndex(() => {
      let index = currentSongIndex
      index++
      if (index >= numberSongs) {
        index = 0
      }
      return index
    })
  }

  const handlePrevSong = () => {
    setCurrentSongIndex(() => {
      let index = currentSongIndex
      index--
      if (index < 0) {
        index = numberSongs - 1
      }
      return index
    })
  }

  const handleRepeatSong = () => {
    setCurrentSongIndex(() => {
      let index = currentSongIndex
      return index
    })
  }

  const handleRandomSong = () => {
    let randomIndex = Math.floor(Math.random()*numberSongs)
    while(randomIndex === currentSongIndex) {
      randomIndex = Math.floor(Math.random()*numberSongs)
    } 
    setCurrentSongIndex(randomIndex)
  }

  const handleClickRandom = () => {
    if(isRepeat) {
      setIsRepeat(false)
    }
    setIsRandom(!isRandom)
  }

  const handleClickRepeat = () => {
    if(isRandom) {
      setIsRandom(false)
    }
    setIsRepeat(!isRepeat)
  }

  return (
    <>
      <audio onEnded={isRepeat ? handleRepeatSong : isRandom ? handleRandomSong : handleNextSong} ref={audioEl} src={songs[currentSongIndex].src}></audio>
      <div className="btn__control">
        <button onClick={handleClickRandom} className='btn__event'>
          {
            isRandom ? <i className="fa-solid fa-shuffle  active"></i> : <i className="fa-solid fa-shuffle"></i>
          }
        </button>
        <button onClick={isRandom ? handleRandomSong : handlePrevSong}>
          <img src="/assets/icons/prev.svg" alt="hola" />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ?
            <img src="/assets/icons/pause.svg" alt="hola" />
            :
            <img src="/assets/icons/play.svg" alt="hola" />
          }
        </button>
        <button onClick={isRandom ? handleRandomSong : handleNextSong}>
          <img src="/assets/icons/next.svg" alt="hola" />
        </button>
        <button onClick={handleClickRepeat} className='btn__event btn__event-repeat'>
          {
            isRepeat ? <i className="fa-solid fa-repeat active"></i> : <i className="fa-solid fa-repeat"></i>
          }
        </button>
      </div>
    </>
  )
}

export default Player