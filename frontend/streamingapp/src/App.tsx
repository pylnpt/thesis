import { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './Components/Header/Header.tsx'
import HomePage from './Pages/Home/Home.tsx'
import './App.css'

function App() {
  
  return (
    <>
    <Header/>
    <hr></hr>
    <HomePage/>
    </>
  )
}

export default App
