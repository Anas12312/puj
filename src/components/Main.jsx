import React, { useRef } from 'react'
import background from './../../public/space.png'
import Navbar from './Navbar'

export default function Main() {


    return (
        <div className='w-full h-full relative flex justify-start items-start'
          style={{backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'100%'}}
        >
          <Navbar />
          {/* <div className='absolute left-[10%] text-white'>
            aa
          </div> */}

        </div>
  )
}