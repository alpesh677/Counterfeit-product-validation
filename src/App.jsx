import { useState } from 'react'
import './App.css'
import Home from "./Components/Home/Home"
import Login from './Components/Login'
import Navbar from "./Components/Navbar"
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
