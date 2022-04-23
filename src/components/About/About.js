import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../constants/constant'
import { useNavigate } from 'react-router-dom'
import './About.scss'
function About() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="nav__list">
        <Link to='/'>
          <img className='nav__logo' src={Images.LOGO_LOFI} alt="icon" />
        </Link>
        <div className="nav__item">
          <a
            href='https://github.com/Krisser99/web_lofi_music'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
            <span className="nav__item-text">GitHub</span>
          </a>
        </div>
      </nav>
      <img className='bg_about_login' src='/assets/bg/phong-ngu-lofi-chill-hinh-nen-2560x1440_51.jpg' alt='hola' />

      <div className="about">
        <h3>Welcome to my website</h3>
        <h3>The purpose of this application is for learning</h3>
        <h3>This is a web application inspired by Lofi.co and </h3>
        <h3>(https://lofiphucle.netlify.app)</h3>
        <h3>Hope you guys enjoy it 😍😍😍</h3>
        <button className='back_home' onClick={() => navigate('/')}>
          Back to HomePage
        </button>
      </div>
    </>
  )
}

export default About