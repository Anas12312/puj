import React from 'react'

export default function Home() {
  return (
    <div className='w-[70%] text-white pb-32 font-bold text-8xl flex flex-col font-Lexend'>
        <div>Puj</div>
        <div>Space Station</div>
        <div className='text-[#c4cfce] text-xl mt-6'>Welcome to the space station — home for cats curious about Jupiter.</div>
        <div className='flex mt-6'>
            <div className='bg-[#c7f284] w-fit text-lg px-10 py-3 rounded-lg text-black hover:bg-white trans cursor-pointer mr-5'>USER GUIDES</div>
            <div className='border obrder-white w-fit text-lg px-10 py-3 rounded-lg text-white hover:text-black hover:bg-white trans cursor-pointer'>DEVELOPER DOCS</div>
        </div>
    </div>
  )
}
