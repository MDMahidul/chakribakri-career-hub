import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
