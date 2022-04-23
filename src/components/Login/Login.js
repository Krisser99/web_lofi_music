import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../constants/constant'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './Login.scss'
function Login() {
  const navigate = useNavigate()
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/')
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  return (
    <>
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
      </nav>
      <img className='bg_about_login' src='/assets/bg/phong-ngu-lofi-chill-hinh-nen-2560x1440_51.jpg' alt='hola' />

      <div className="login__wrap">
        <h3>Welcome to my website</h3>
        <h3>Sign in and explore it now 🤗🤗🤗!!!</h3>
        <button className='login__google' onClick={handleLogin}>
          <img src='/assets/icons/google.svg' alt='' />
          Sign In With Google
        </button>
      </div>
    </>
  )
}

export default Login