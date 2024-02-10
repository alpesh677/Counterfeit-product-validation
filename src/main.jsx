import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./Components/Home/Home.jsx"
import Login from './Components/Login.jsx'
import { BrowserRouter,Router,RouterProvider,Routes, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
