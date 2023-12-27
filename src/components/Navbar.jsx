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

      <div className='absolute right-6 bg-[#121D28] rounded-xl  w-28 h-11 z-0'></div></div>
        <div className='mx-5'><img src="https://station.jup.ag/img/jupiter-logo.svg" alt="" /></div>
        <div className='text-lg font-bold mr-16 text-white font-mono'>Puj Station</div>
        <div className='nav-bar-item' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToMainRef}>Home</div>
        <div className='nav-bar-item' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToAboutRef}>About</div>
        <div className='nav-bar-item' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToTokenomicsRef}>Tokenomics</div>
        <div className='nav-bar-item' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToRoadmapRef}>Roadmap</div>
        <div className='nav-bar-item' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={comingSoon}>Air Drop</div>
        <div className='nav-bar-item mr-5' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={comingSoon}>Pre Sale</div>
        <div className='nav-bar-buy-now trans' onClick={comingSoon}>buy now</div>
        <div className='absolute right-6 bg-[#121D28] rounded-xl  w-28 h-11 z-0'></div>
    </div>
  )
}
