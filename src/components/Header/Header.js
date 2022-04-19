import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Images from '../../constants/constant'
import { changeDayNight } from '../../redux/actions'
import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch'
import './Header.scss'

function Header() {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const dayNight = useSelector(state => state.modeState)
  const dispatch = useDispatch()
  const {mode} = dayNight
  // console.log(mode)

  const dayNightHandle = () => {
    dispatch(changeDayNight(mode))
  }

  const handleFullScreen = () => {
    if(!isFullScreen) {
      document.documentElement.requestFullscreen()
      setIsFullScreen(true)
    } else {
      document.exitFullscreen()
      setIsFullScreen(false)
    }
  }


  return (
    <div>
      <nav className="nav__list">
        <Link to='/'>
          <img className='nav__logo' src={Images.LOGO_LOFI} alt="icon" />
        </Link>
        <div className="nav__item">
          <Link to='/about'>
            <i className='fas fa-info'></i>
            <span className="nav__item-text">How it works?</span>
          </Link>
          <a
            href='https://github.com/Krisser99/web_lofi_music'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
            <span className="nav__item-text">GitHub</span>
          </a>
        </div>

        <div className="nav__item">
          <div onClick={dayNightHandle}>
            <DarkLightSwitch theme={mode}/>
          </div>
          <button className='full-screen' onClick={handleFullScreen}>
            <i className='fas fa-expand fa-lg'></i>
          </button>
        </div>

        <div className="nav__item">
          <Link to='/login'>
            <i className='fas fa-sign-in-alt'></i>
            <span className="nav__item-text">Log In</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header