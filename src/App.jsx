import { useEffect, useRef, useState } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  const mainRef = useRef(null);

  const scrollToMainRef = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <Navbar 
        scrollToMainRef={scrollToMainRef}
      />
      <div className='w-full' ref={mainRef}>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App