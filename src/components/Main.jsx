import React, { useRef } from 'react'
import background from './../../public/space.png'

export default function Main() {

    const myRef = useRef(null)

    return (
        <div className='w-full relative flex container-anas justify-center items-center h-screen'
          style={{backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'contain'}}
        >
          <div className='absolute left-[10%] text-white'>
            aa
          </div>

        </div>
  )
}