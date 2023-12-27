import React, { useRef } from 'react'
import Navbar from './Navbar'
import Home from './Home'

export default function Main() {


    return (
        <div className='w-full h-full relative flex flex-col justify-between items-center'
          style={{backgroundImage: `url(./../../space.png)`, backgroundRepeat:'no-repeat', backgroundSize:'100%'}}
        >
          <Navbar />
          <Home />


        </div>
  )
}