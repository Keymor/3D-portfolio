import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Home from './pagesComponent/home'

function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='size-full flex'>
      <button className='w-20 h-10 absolute bg-red-500 rounded z-3 top-1/2 left-1/2 -translate-x-1/2 cursor-pointer' onClick={() => setClicked(!clicked)}>HIDE</button>
      <div style={{display: clicked ? 'none' : ''}} className=' absolute z-2'>
        <img src='site1-1.png' ></img>
      </div>
      <div className='size-full z-10'>
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App
