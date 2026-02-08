import React from 'react'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import {Routes, Route} from 'react-router-dom'

export const serverURL = "http://localhost:3000"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
      </Routes>
    </>
  )
}
