import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Home from './pagesComponent/home'
import Portfolio from './pagesComponent/portfolio'
import About from './pagesComponent/about'
import Contact from './pagesComponent/contact'

function App() {
  const [clicked, setClicked] = useState(false)
  const [scroll, setScroll] = useState(0)

  return (
    <div className='w-screen flex flex-col relative'>
      <button className='w-15 h-8 text-black fixed bg-gray-300 rounded z-3 top-13 left-10 shadow-2xl -translate-x-1/2 cursor-pointer' onClick={() => setClicked(!clicked)}>HIDE</button>
      <div style={{display: clicked ? 'none' : ''}} className=' absolute z-2 w-screen'>
        <img src='site1-1.png' width={2500}></img>
      </div>
      <div className='w-full min-h-screen z-1 flex flex-col relative'>
        <Header />
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App
