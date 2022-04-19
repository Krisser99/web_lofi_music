import React from 'react'
import { useSelector } from 'react-redux'
import ChillVibes from '../BackGround/ChillVibes/ChillVibes'
import ModifiedBoard from '../ModifiedBoard/ModifiedBoard'
import RainToggleButton from '../RainToggleButton/RainToggleButton'
import './Home.scss'


function Home() {
  const modeState = useSelector(state => state.modeState)
  const {mode} = modeState

  const rainState = useSelector(state => state.rainState)
  const {rainMode} = rainState
  // console.log(mode)
  const combieMode = `${mode}-${rainMode}`


  return (
    <>
      <ChillVibes
        combieMode={combieMode}
      />
      <RainToggleButton />
      <ModifiedBoard />
    </>
  )
}

export default Home