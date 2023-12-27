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
        <div className='mr-10 w-20'><img src="https://www.symbols.com/images/symbol/2847_icy-tower-logo.png" alt="" /></div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToMainRef}>Home</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToAboutRef}>About</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToTokenomicsRef}>Tokenomics</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={scrollToRoadmapRef}>Roadmap</div>
        <div className='nav-bar-item trans' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={comingSoon}>Air Drop</div>
        <div className='nav-bar-item trans mr-5' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={comingSoon}>Pre Sale</div>
        <div className='nav-bar-buy-now trans' onClick={comingSoon}>buy now</div>
        <div className='p-5 text-3xl flex justify-start items-center'>
          <div className='mx-2 hover:scale-110 trans hover:cursor-pointer w-12'
                onClick={() => {
                  window.open('https://twitter.com/HaroldonSol', '_blank');
                }}>
            <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twtttt.png" alt="" />
          </div>
          <div className='mx-2 hover:scale-110 trans hover:cursor-pointer w-12'
                onClick={() => {
                  window.open('https://t.me/HaroldCoinOnSol', '_blank');
                }}>
            <img src="https://static.wixstatic.com/media/1f3f2b_af942b4585dd4bf9baaa6e151c02f1b4~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twttttee2.png" alt="" />
          </div>
        </div>
    </div>
  )
}
