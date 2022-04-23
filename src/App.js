import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'
import './App.scss';

function App() {

  return (
    <>
      <div className="mobie">
        <h2>This website don't support mobie</h2>
        <h2>Please use PC for it</h2>
      </div>
      <div className="pc">
        <Routes>
          <Route path='/' element={
            <>
              <Header /> <Home />
            </>}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );

}

export default App;
