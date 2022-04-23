import React from 'react'
import './Digit.scss'
function Digit(props) {
  const {value, title} = props
  const leftNum = value >= 10 ? value.toString()[0] : '0'
  const rightNum = value >= 10 ? value.toString()[1] : value.toString()
  return (
    <>
      <div className="digit__wrap">
        <span className="digit__title">{title}</span>
        <div className="digit__content">
          <span className='digit__num digit__num-left'>{leftNum}</span>
          <span className='digit__num digit__num-right'>{rightNum}</span>
        </div>
      </div>

    </>
  )
}

export default Digit