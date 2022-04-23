import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from './components/Login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header /> <Home />
          </>}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );

}

export default App;
