import React from 'react'
import Navbar from './componentes/NavBar/Navbar'
import LoginSignUp from './Pages/LoginSignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<LoginSignUp/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
