import Header from './components/header'
import './App.css'
import Home from './pagesComponent/home'
import Portfolio from './pagesComponent/portfolio'
import About from './pagesComponent/about'
import Contact from './pagesComponent/contact'

function App() {

  return (
    <div className='w-screen flex flex-col relative'>
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
