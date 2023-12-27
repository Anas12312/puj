import React from 'react'

export default function Navbar({
  scrollToMainRef,
  scrollToAboutRef, 
  scrollToTokenomicsRef,
  scrollToRoadmapRef,
}) {
  const mouseEnter = (e) => {
    e.target?.classList.add('text-gradiant')
  }
  const mouseLeave = (e) => {
    e.target?.classList.remove('text-gradiant')
  }
  const comingSoon = () => {
    alert('Coming Soon...')
  }
  return (
    <div className='nav-bar z-10 '>
        <div className='mx-5'><img src="https://station.jup.ag/img/jupiter-logo.svg" alt="" /></div>
        <div className='text-lg font-bold mr-16 text-white'>Puj Station</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToMainRef}>Home</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToAboutRef}>About</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToTokenomicsRef}>Tokenomics</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToRoadmapRef}>Roadmap</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={comingSoon}>Air Drop</div>
        <div className='nav-bar-item trans mr-5' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={comingSoon}>Pre Sale</div>
        <div className='nav-bar-buy-now trans' onClick={comingSoon}>buy now</div>
    </div>
  )
}
