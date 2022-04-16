import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../constants/constant'

function Header() {
  return (
    <div>
      <nav className="nav__list">
        <Link to='/'>
          <img src={Images.LOGO_LOFI} alt="icon" />
        </Link>
        <Link to='/about'>
          <i className='fas fa-info'></i>
          <span className="nav__list-text">How it works?</span>
        </Link>
        <a href=''>
          <i className='fab fa-github'></i>
          <span className="nav__list-text">GitHub</span>
        </a>
      </nav>
    </div>
  )
}

export default Header